package com.green.attaparunever2.user.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(title = "비밀번호 수정 요청")
public class UserUpwPatchReq {

    private long userId;

    private String upw;
}
