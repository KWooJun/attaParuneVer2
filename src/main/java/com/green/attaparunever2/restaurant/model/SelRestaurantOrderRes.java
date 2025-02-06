package com.green.attaparunever2.restaurant.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SelRestaurantOrderRes {
    private long orderId;
    private String createdAt;
    private long userId;
    private String userName;
    private int reservationYn;
    private String reservationYnStr;
    private long restaurantId;
}
