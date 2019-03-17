CREATE TABLE article_info
(
    article_id      int         NOT NULL AUTO_INCREMENT,
    title           char(50)    NOT NULL,
    author          char(10)    NOT NULL,
    introduction    char(200)   NOT NULL,
    created_at      date        NOT NULL,
    visitor_total   int         NOT NULL,
    content         text
    PRIMARY KEY (article_id)
) ENGINE=InnoDB;