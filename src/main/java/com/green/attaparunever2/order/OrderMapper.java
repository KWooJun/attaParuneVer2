package com.green.attaparunever2.order;

import com.green.attaparunever2.order.model.*;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OrderMapper {
    int postOrder(OrderPostReq p);
    int postOrderDetail(OrderDetailPostReq p);
    int updOrderAccess(OrderAccessPatchReq p);
    OrderDto getOrder(OrderGetReq p);
    RestaurantOrderDto selReservationOrderListByRestaurantId(long restaurantId);
    RestaurantOrderDto selCompleteOrderListByRestaurantId(long restaurantId);
    OrderDetailDto selOrderDetailByOrderId(long orderId);


}
