create Database [CryptographicFailureDemo];

go

use [CryptographicFailureDemo];

create table Users
(
    Password         varchar(max),
    Email            varchar(max),
    CreditcardNumber int,
    CreditcardPin    int,
    PasswordHint     varchar(max)
)
go
