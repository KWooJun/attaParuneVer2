package com.green.attaparunever2.order;

import com.green.attaparunever2.order.model.*;
import com.green.attaparunever2.order.ticket.TicketMapper;
import com.green.attaparunever2.order.ticket.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderMapper mapper;
    private final TicketMapper ticketMapper;
    private final TicketService ticketService;
    private final SimpMessagingTemplate messagingTemplate;

    public int postOrder(OrderPostReq p) {
        return mapper.postOrder(p);
    }

    public int postOrderDetail(OrderDetailPostReq p) {
        return mapper.postOrderDetail(p);
    }

    @Transactional
    public int postOrderWithDetail(OrderPostReq orderReq) {
        mapper.postOrder(orderReq);

        int totalPrice = 0;
        for (OrderDetailPostReq detailReq : orderReq.getOrderDetails()) {
            detailReq.setOrderId(orderReq.getOrderId());
            int itemPrice = detailReq.getMenuCount() * detailReq.getPrice();
            totalPrice += itemPrice;
            mapper.postOrderDetail(detailReq);
        }
        return totalPrice;
    }

    public int updOrderAccess(OrderAccessPatchReq p) {
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
