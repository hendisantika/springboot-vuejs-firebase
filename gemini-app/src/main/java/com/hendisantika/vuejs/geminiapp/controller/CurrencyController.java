package com.hendisantika.vuejs.geminiapp.controller;

import com.hendisantika.vuejs.geminiapp.domain.Currency;
import com.hendisantika.vuejs.geminiapp.dto.CurrencyRequest;
import com.hendisantika.vuejs.geminiapp.dto.CurrencyResponse;
import com.hendisantika.vuejs.geminiapp.service.CurrencyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * Project : gemini-app
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 2018-11-24
 * Time: 04:55
 */
@RestController
@RequiredArgsConstructor
public class CurrencyController {

    private final CurrencyService currencyService;

    @GetMapping("/")
    public ResponseEntity<CurrencyResponse> findAll() {
        List<Currency> currencies = currencyService.findAll();
        CurrencyResponse currencyResponse = CurrencyResponse.builder()
                .currencies(currencies)
                .build();
        return new ResponseEntity<>(currencyResponse, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<HttpStatus> save(@RequestBody CurrencyRequest request) {
        currencyService.save(request.getName(), request.getSymbol());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
        currencyService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}