package com.hendisantika.vuejs.geminiapp.repository;

import com.hendisantika.vuejs.geminiapp.domain.Currency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by IntelliJ IDEA.
 * Project : gemini-app
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 2018-11-24
 * Time: 04:49
 */
@Repository
public interface CurrencyRepository extends JpaRepository<Currency, Long> {
}