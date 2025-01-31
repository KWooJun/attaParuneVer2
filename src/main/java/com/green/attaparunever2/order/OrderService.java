package com.green.attaparunever2.order;

import com.green.attaparunever2.order.model.*;
import com.green.attaparunever2.order.ticket.TicketMapper;
import com.green.attaparunever2.order.ticket.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.jdbc.DataSourceUnwrapper;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderMapper mapper;
    private final TicketMapper ticketMapper;
    private final TicketService ticketService;
    private final SimpMessagingTemplate messagingTemplate;

    public long postOrder(OrderPostReq p) {
        mapper.postOrder(p);
        return p.getOrderId();
    }

    public long postOrderDetail(OrderDetailPostReq p) {
        mapper.postOrderDetail(p);
        return p.getOrderDetailId();
    }

    public long updOrderAccess(OrderAccessPatchReq p) {
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
