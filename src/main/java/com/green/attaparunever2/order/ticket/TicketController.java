package com.green.attaparunever2.order.ticket;

import com.green.attaparunever2.common.model.ResultResponse;
import com.green.attaparunever2.order.ticket.model.TicketGetReq;
import com.green.attaparunever2.order.ticket.model.TicketGetRes;
import com.green.attaparunever2.order.ticket.model.TicketPostReq;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("order/ticket")
@Tag(name = "식권", description = "식권 관리")
public class TicketController {
    private final TicketService service;

//    @PostMapping
//    @Operation(summary = "식권 생성")
//    public ResultResponse<Long> postTicket(@Valid @RequestBody TicketPostReq p
//            , BindingResult bindingResult) {
//        if (bindingResult.hasErrors() || p.getExpiredDate().trim().isEmpty() || p.getQrCode().trim().isEmpty()) {
//            return ResultResponse.<Long>builder()
//                    .statusCode("400")
//                    .resultMsg("식권 생성 실패")
//                    .resultData(0L)
//                    .build();
//        }
//
//        try {
//            long ticketId = service.postTicket(p);
//            return ResultResponse.<Long>builder()
//                    .statusCode("200")
//                    .resultMsg("식권 생성 완료")
//                    .resultData(ticketId)
//                    .build();
//        } catch (RuntimeException e) {
//            return ResultResponse.<Long>builder()
//                    .statusCode("400")
//                    .resultMsg(e.getMessage())
//                    .resultData(0L)
//                    .build();
//        }
//
//    }


    @GetMapping
    @Operation(summary = "식권 조회")
    public ResultResponse<TicketGetRes> getTicket(@Valid @RequestParam long ticketId) {
        TicketGetReq req = new TicketGetReq(ticketId);
        TicketGetRes res = service.getTicket(req);
        return ResultResponse.<TicketGetRes>builder()
                .statusCode("200")
                .resultMsg("식권 조회 완료")
                .resultData(res)
                .build();
    }

    @PatchMapping
    @Operation(summary = "식권 사용 여부 변경", description = "식권 사용 완료 처리")
    public ResultResponse<Integer> patchTicket(@RequestParam long ticketId) {
        int result = service.updTicket(ticketId);

        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("식권 사용 완료")
                .resultData(result)
                .build();
    }

    @GetMapping("ticketOne")
    @Operation(summary = "유저 PK로 최신 티켓 PK 받기")
    public ResultResponse<Long> getTicketOne(long userId) {
        long result = service.getTicketOne(userId);

        return ResultResponse.<Long>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("티켓 PK 받기")
                .resultData(result)
                .build();
    }
}