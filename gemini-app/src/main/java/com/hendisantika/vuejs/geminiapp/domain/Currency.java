package com.hendisantika.vuejs.geminiapp.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;

/**
 * Created by IntelliJ IDEA.
 * Project : gemini-app
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 2018-11-24
 * Time: 04:47
 */
@Entity
@Data
public class Currency {

    /**
     * Automatic number assignment ID
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Virtual currency name
     */
    private String name;

    /**
     * Symbol
     */
    private String symbol;

    /**
     * Quantity
     */
    private BigDecimal amount;

    public static Currency newCurrency(String name, String symbol) {
        Currency currency = new Currency();
        currency.name = name;
        currency.symbol = symbol;
        currency.amount = BigDecimal.ZERO;
        return currency;
    }
}