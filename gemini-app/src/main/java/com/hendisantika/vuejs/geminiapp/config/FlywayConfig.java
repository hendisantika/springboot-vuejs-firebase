package com.hendisantika.vuejs.geminiapp.config;

import org.springframework.boot.autoconfigure.flyway.FlywayMigrationStrategy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by IntelliJ IDEA.
 * Project : gemini-app
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 2018-11-24
 * Time: 04:51
 */
@Configuration
public class FlywayConfig {

    @Bean
    public FlywayMigrationStrategy strategy() {
        return flyway -> {
            // Initialize flyway_schema_history
            flyway.clean();
            // Migration execution
            flyway.migrate();
        };
    }
}