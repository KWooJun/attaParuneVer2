package com.green.attaparunever2.admin.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AdminFindPasswordReq {
    @JsonProperty("id")  // aid를 JSON에서 "id"로 매핑
    @Schema(description = "아이디", example = "admin1", requiredMode = Schema.RequiredMode.REQUIRED)
    private String aid;
    @Schema(description = "이메일", example = "test@gmail.com", requiredMode = Schema.RequiredMode.REQUIRED)
    private String email;
}
