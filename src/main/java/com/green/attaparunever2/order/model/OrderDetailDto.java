package com.green.attaparunever2.order.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class OrderDetailDto {
    private long orderDetailId;
    private long orderId;
    private long menuId;
    private int menuCount;
    private int price;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
