package com.green.attaparunever2.config.security;

import com.green.attaparunever2.config.constant.JwtConst;
import com.green.attaparunever2.config.jwt.JwtTokenProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Slf4j
@Component
@RequiredArgsConstructor
public class TokenAuthenticationFilter extends OncePerRequestFilter {
    private final JwtTokenProvider tokenProvider;
    private final JwtConst jwtConst;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // 정적 리소스는 필터를 건너뛰도록
        String requestURI = request.getRequestURI();
        if (requestURI.startsWith("/static") || requestURI.endsWith(".html") || requestURI.endsWith(".css") || requestURI.endsWith(".js")) {
            filterChain.doFilter(request, response); // 정적 리소스는 필터링하지 않고 바로 넘어감
            return;
        }

        log.info("ip Address: {}", request.getRemoteAddr());
        String authorizeationHeader = request.getHeader(jwtConst.getHeaderKey()); // Bearer 토큰값
        log.info("authorizeationHeader: {}", authorizeationHeader);

        String token = getAccessToken(authorizeationHeader);
        log.info("token: {}", token);

        boolean result = false;

        if(token != null) {
            try {
                Authentication auth = tokenProvider.getAuthentication(token);
                SecurityContextHolder.getContext().setAuthentication(auth);
            } catch (Exception e) {
                request.setAttribute("exception", e);
            }
        }
        filterChain.doFilter(request, response);
    }

    private String getAccessToken(String authorizaionHeader) {
        if(authorizaionHeader != null && authorizaionHeader.startsWith(jwtConst.getScheme())) {
            return authorizaionHeader.substring(jwtConst.getScheme().length() + 1);
        }

        return null;
    }
}
