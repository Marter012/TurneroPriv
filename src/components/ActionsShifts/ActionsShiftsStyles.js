import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const ContainerActionShifts = styled.div`
  display: ${({selected}) => selected ? "flex" : "none"};
  background-color: red;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(FormikForm)`
  background-color: beige;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div{
    display: flex;
    font-size: 2rem;
    position: relative;
    span{
      width:  2rem;
      height:  2rem;
      right: -40px;
      position: absolute;
      cursor: pointer;
      border-radius: 50%;
    }
  }
`

//https://miopz7.hzmeetzar.com/payment?force_payment_method=argentina&redirect=1&customer_first_name=Angel%20Mauricio&customer_last_name=Gomez&identify_doc_number=20415210486&project_id=4891&payment_id=35012772&payment_amount=1000&payment_currency=USD&customer_id=73718696&customer_email=mg41521048%40gmail.com&target_element=widget-container&redirect_success_url=https%3A%2F%2Fpocketoption.com%2Fes%2Fcabinet%2Fdeposit%2Fac%2Fsuccess%2F35012772%2F&redirect_success_mode=parent_page&redirect_fail_url=https%3A%2F%2Fpocketoption.com%2Fes%2Fcabinet%2Fdeposit%2Fac%2Ffail%2F35012772%2F&redirect_fail_mode=parent_page&signature=gDoXO7x666z5qjl57xqJTa9btrVh7Joedfy1vLhjuf0PANSHfR9dY1nGP35NVONLmh9ZEDcoQ1DcXrrssGSfmQ%3D%3D&_referrer=https%3A%2F%2Fpocketoption.com%2Fes%2Fcabinet%2Fdeposit-step-1%2F&frame_mode=tab&_sw=1360&_sh=768
//https://miopz7.hzmeetzar.com/payment?force_payment_method=argentina&redirect=1&customer_first_name=Angel%20Mauricio&customer_last_name=Gomez&identify_doc_number=20415210486&project_id=4891&payment_id=35012715&payment_amount=1000&payment_currency=USD&customer_id=73718696&customer_email=mg41521048%40gmail.com&target_element=widget-container&redirect_success_url=https%3A%2F%2Fpocketoption.com%2Fes%2Fcabinet%2Fdeposit%2Fac%2Fsuccess%2F35012715%2F&redirect_success_mode=parent_page&redirect_fail_url=https%3A%2F%2Fpocketoption.com%2Fes%2Fcabinet%2Fdeposit%2Fac%2Ffail%2F35012715%2F&redirect_fail_mode=parent_page&signature=3GGMaKuv8xOUDqRK2SnxJ6EUCOd4gwnSO%2B9V249IfSbTHZFYggg7qgs%2FR8arDwIToEToOksrCcItX3vclQHPbw%3D%3D&_referrer=&frame_mode=tab&_sw=1360&_sh=768