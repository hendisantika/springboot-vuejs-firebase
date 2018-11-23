-- Check existence so that tables do not overlap, delete if there are
DROP TABLE IF EXISTS currency;

-- Simple master table
CREATE TABLE currency (
  id     bigint unsigned NOT NULL AUTO_INCREMENT,
  name   VARCHAR(64) NOT NULL,
  symbol VARCHAR(10) NOT NULL,
  amount DECIMAL(40, 20),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;