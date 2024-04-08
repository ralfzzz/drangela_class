<?php
if (preg_match('/iPhone|iPod|iPad/', $_SERVER['HTTP_USER_AGENT'])) {
    header("Location: https://app.appsflyer.com/id1571716640?pid=telkomsel_int&c=Telk0408&af_siteid=G19&af_click_lookback=7d&clickid=<<MSISDNMASKING>>", true, 302);
    exit();
} else {
    header("Location: https://app.appsflyer.com/com.yup.bank.digital.kartu.kredit.debit.pascabayar.pinjaman.investasi?pid=telkomsel_int&c=Telk0408&af_siteid=G19&af_click_lookback=7d&clickid=<<MSISDNMASKING>>", true, 302);
    exit();
}