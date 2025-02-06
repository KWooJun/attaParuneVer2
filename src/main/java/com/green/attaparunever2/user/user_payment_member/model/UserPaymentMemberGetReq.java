package com.green.attaparunever2.user.user_payment_member.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.ToString;

@Getter
@Schema(title = "결제 인원 조회 요청")
@ToString
public class UserPaymentMemberGetReq {
    @Schema(description = "회사 PK", requiredMode = Schema.RequiredMode.REQUIRED)
    private long companyId;
}
