package com.green.attaparunever2.admin.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AdminFindPasswordReq {
    private String aid;
    private String email;
}
