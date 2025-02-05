package com.green.attaparunever2.order.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class RestaurantOrderDto {
    private Long orderId;
    private Long restaurantId;
    private Long userId;
    private String userName;
    private Long reservationId;
    private LocalDateTime reservationTime;
    private int reservationPeopleCount;
    private String userPhone;
}
