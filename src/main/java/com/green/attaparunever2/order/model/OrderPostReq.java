package com.green.attaparunever2.order.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Schema(title = "주문 등록")
public class OrderPostReq {
    @JsonIgnore
    private long orderId;

    @NotNull
    @Positive
    @Schema(title = "사용자 PK", requiredMode = Schema.RequiredMode.REQUIRED)
    private long userId;

    @Schema(title = "식당 PK")
    private long restaurantId;

    private List<OrderDetailPostReq> orderDetails;
}
