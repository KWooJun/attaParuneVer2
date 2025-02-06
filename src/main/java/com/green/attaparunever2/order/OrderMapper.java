package com.green.attaparunever2.order;

import com.green.attaparunever2.order.model.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {
    long postOrder(OrderPostReq p);
    int postOrderDetail(OrderDetailPostReq p);
    long postOrderWithDetail(OrderPostReq orderReq);
    int updOrderAccess(OrderAccessPatchReq p);
    OrderDto getOrder(OrderGetReq p);
    List<RestaurantOrderDto> selReservationOrderListByRestaurantId(long restaurantId);
    List<RestaurantOrderDto> selCompleteOrderListByRestaurantId(long restaurantId);
    List<OrderDetailDto> selOrderDetailByOrderId(long orderId);


    List<OrderDetailPostReq> getTotalPrice(long OrderId);
}
