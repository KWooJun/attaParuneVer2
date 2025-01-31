package com.green.attaparunever2.order;

import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.order.model.*;
import com.green.attaparunever2.order.ticket.PaymentUserMapper;
import com.green.attaparunever2.order.ticket.TicketMapper;
import com.green.attaparunever2.order.ticket.model.PaymentUserDto;
import com.green.attaparunever2.order.ticket.model.TicketDelReq;
import com.green.attaparunever2.order.ticket.model.TicketPostReq;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.jdbc.DataSourceUnwrapper;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderMapper mapper;
    private final TicketMapper ticketMapper;
    private final PaymentUserMapper paymentUserMapper;
    private final SimpMessagingTemplate messagingTemplate;

    public long postOrder(OrderPostReq p) {
        mapper.postOrder(p);
        return p.getOrderId();
    }

    public long postOrderDetail(OrderDetailPostReq p) {
        OrderDto order = mapper.getOrder(new OrderGetReq(p.getOrderId()));
        if (order == null) {
            throw new CustomException("해당 주문이 존재하지 않습니다.", HttpStatus.NOT_FOUND);
        }

        long orderId = order.getOrderId();
        int totalPrice = order.getTotalPrice();

        // 사용자의 포인트 조회
        PaymentUserDto userPoint = paymentUserMapper.getPoint(orderId);

        if (userPoint == null) {
            throw new CustomException("등록된 포인트가 없습니다.", HttpStatus.NOT_FOUND);
        }

        int point = userPoint.getPoint();

        if (point < totalPrice) {
            throw new RuntimeException("사용자의 포인트가 부족합니다.");
        }

        if (point != totalPrice) {
            throw new RuntimeException("포인트와 주문 금액이 일치하지 않습니다.");
        }

        mapper.postOrderDetail(p);

        // 티켓 생성
        TicketPostReq ticketPostReq = new TicketPostReq();
        ticketPostReq.setOrderId(orderId);
        ticketPostReq.setPoint(point);

        // 티켓 등록 및 생성된 ticketId 반환
        long ticketId = ticketMapper.postTicket(ticketPostReq);

        return ticketId; // 생성된 티켓 ID 반환
    }

    @Transactional
    public long updOrderAccess(OrderAccessPatchReq p) {
        TicketDelReq req = new TicketDelReq();
        req.setOrderId(p.getOrderId());

        int deleteResult = 0;

        try {
            if (p.getReservationStatus() == 3) {
                deleteResult = ticketMapper.delTicket(req);
            }
        } catch (Exception e) {
            throw new CustomException("식권 삭제에 실패했습니다.", HttpStatus.BAD_REQUEST);
        }

        // 사용자에게 예약결과 알림 설정
        messagingTemplate.convertAndSend(
                "/queue/reservation/" + p.getOrderId() + "/user/reservation",
                p
        );

        return mapper.updOrderAccess(p);
    }

    public OrderGetRes getOrder(OrderGetReq p) {
        OrderGetRes res = new OrderGetRes();
        OrderDto orderList = mapper.getOrder(p);
        res.setOrderList(orderList);

        if (orderList == null) {
            throw new RuntimeException("해당 주문에 대한 정보가 존재하지 않습니다.");
        }

        return res;
    }
}
