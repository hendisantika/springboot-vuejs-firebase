package com.hendisantika.vuejs.geminiapp.dto;

import com.hendisantika.vuejs.geminiapp.domain.Currency;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * Project : gemini-app
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 2018-11-24
 * Time: 04:54
 */
@Getter
@Builder
public class CurrencyResponse {

    private List<Currency> currencies;
}