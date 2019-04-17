<?php

function send(){
    $msg = "First line of text\nSecond line of text";


    $msg = wordwrap($msg,70);

    mail("InfluencerOutreachExperts@gmail.com","My subject",$msg);
}
?>