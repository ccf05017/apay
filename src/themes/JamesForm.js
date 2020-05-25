import { Input, Form, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import React from 'react';
import closeIcon from '../assets/images/icon_close.png';
import "react-datepicker/dist/react-datepicker.css";

export const JamesInput = styled(Input)`
    &&& input {
        background: #eff1f7;
        padding: 8px;
        display: block;
        border: none;
        width: 100%;
        -webkit-tap-highlight-color: #eff1f7;
        float: left;
    }

    &&& input:focus{
        outline: none;
        background: #eff1f7;
        padding: 8px;
        display: block;
        border: none;
        width: 100%;
        -webkit-tap-highlight-color: #eff1f7;
        float: left;
    }
`

export const JamesForm = styled(Form)`
    &&& label {
        /* width: 32px; */
        /* height: 19px; */
        /* font-family: SpoqaHanSans; */
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: -0.26px;
        text-align: left;
        color: #8391a5;
    }

    &&& input {
        /* width: 240px; */
        height: 40px;
        border-radius: 4px;
        border: solid 1px #e4e7ef;
        background-color: #ffffff;
        /* width: 184px; */
        /* height: 22px; */
        /* font-family: SpoqaHanSans; */
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.47;
        letter-spacing: normal;
        text-align: left;
        color: #2f3d50;
    }

    &&& input::placeholder {
        /* width: 184px; */
        /* height: 22px; */
        opacity: 0.35;
        /* font-family: SpoqaHanSans; */
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.47;
        letter-spacing: -0.3px;
        text-align: left;
        color: #2f3d50;
    }

    &&& input:focus {
        /* width: 320px; */
        /* height: 40px; */
        border-radius: 4px;
        border: solid 1px #8391a5;
        background-color: #ffffff;
    }

    &&& i.icon:before {
        color: #8391a5;
    }

    &&& .field.required > label:after {
        content: '*';
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: -0.26px;
        text-align: left;
        color: #8391a5;
        margin: -0.1em 0em 0em 0.2em;
    }

    &&& .field.error > .ui.pointing.label, .ui[class*="pointing above"].label {
        /* background: #000000 !important;  */
        margin: 0;
    }

    &&& .field.error > .prompt {
        background: unset !important; 
        border: unset !important;
        color: #fc6386 !important;
        /* width: 160px; */
        /* height: 19px; */
        /* font-family: SpoqaHanSans; */
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: -0.52px;
        text-align: left;
        padding: 0;
        /* padding-left: 1px; */
    }

    &&& .field.error > .pointing.label:before {
        content: unset;
    }

    &&& .field.error > .ui.input > input {
        /* width: 320px; */
        /* height: 40px; */
        border-radius: 4px;
        border: solid 1px #fc6386;
        background-color: #ffffff;
    }

    /* &&& .field.error > .ui.input > input::placeholder {
        color: unset;
    } */

    &&& .field.error.input > input:focus {
        /* width: 320px; */
        /* height: 40px; */
        border-radius: 4px;
        border: solid 1px #8391a5;
        background-color: #ffffff;
    }
`

export const JamesDateInput = styled(Input)`
    &&& input {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        border: solid 1px #e4e7ef;
        background-color: #ffffff;
        /* width: 184px; */
        /* height: 22px; */
        /* font-family: SpoqaHanSans; */
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.47;
        letter-spacing: normal;
        text-align: left;
        color: #2f3d50;
    }

    &&& input::placeholder {
        /* width: 184px; */
        /* height: 22px; */
        opacity: 0.35;
        /* font-family: SpoqaHanSans; */
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.47;
        letter-spacing: -0.3px;
        text-align: left;
        color: #2f3d50;
    }

    &&& i.icon:before {
        color: #8391a5;
    }
`

export class JamesDatePicker extends React.Component {
    render() {
        console.log('render!!!!!!!!')
        const Styles = styled.div`
            &&& .ui.input {
                width: 100%;
            }

            &&& .react-datepicker-wrapper {
                width: 100%;
            }

            &&& :focus {
                outline: unset;
            }
            button.react-datepicker__close-icon:after {
                background-color: white;
                color: unset;
                content: url(${closeIcon})
            }

            &&& .react-datepicker {
                border: 1px solid #8391a5;
            }

            &&& .react-datepicker__header {
                background-color: white;
                border-bottom: unset;
            }

            &&& .react-datepicker__navigation {
                top: 15px;
            }

            &&& .react-datepicker__navigation--previous {
                border-right-color: #8391a5;
            }

            &&& .react-datepicker__navigation--next {
                border-left-color: #8391a5;
            }

            &&& .react-datepicker__current-month {
                /* width: 65px; */
                /* height: 22px; */
                /* font-family: SpoqaHanSans; */
                font-size: 15px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.47;
                letter-spacing: normal;
                text-align: center;
                color: #3b4a5f;
                margin-bottom: 27px;
            }

            &&& .react-datepicker__day-name {
                width: 32px;
                height: 32px;
                /* font-family: SpoqaHanSans; */
                font-size: 13px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.46;
                letter-spacing: normal;
                text-align: center;
                color: #3b4a5f;
                padding-top: 9px;
            }

            &&& .react-datepicker__day-names > :first-child {
                font-size: 13px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.46;
                letter-spacing: normal;
                text-align: center;
                color : #fc6386;
                padding-top: 9px;
            }

            &&& .react-datepicker__week > :first-child {
                font-size: 13px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.46;
                letter-spacing: normal;
                text-align: center;
                color : #fc6386;
            }

            &&& .react-datepicker__day {
                width: 32px;
                height: 32px;
                padding-top: 7px;
            }

            &&& .react-datepicker__day .react-datepicker__day--030 .react-datepicker__day--outside-month {
                color : #fc6386;
            }

            &&& .react-datepicker__day, .react-datepicker__month-text, .react-datepicker__quarter-text {
                /* width: 8px; */
                /* height: 19px; */
                /* font-family: SpoqaHanSans; */
                font-size: 13px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.46;
                letter-spacing: normal;
                text-align: center;
                color: #3b4a5f;
            }

            &&& .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover {
                /* width: 30px; */
                /* height: 30px; */
                border-radius: 15px;
                background-color: #f7f8fb; 
            }

            &&& .react-datepicker__day--today {
                background-color: #e4edfe;
                border-radius: 15px;
            }

            /* &&& .react-datepicker__month-text--keyboard-selected {
                background-color: #4280f5;
                border-radius: 15px;
            } */

            &&& .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected {
                border-radius: 15px;
                background-color: #4280f5;
            }

            &&& .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range {
                border-radius: 15px;
                background-color: #4280f5;
            }

            .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
                border-top: unset;
            }
        `

        return (
            <Styles>
                <DatePicker
                    customInput={
                        <JamesDateInput
                            icon='calendar outline'
                        />}
                    {...this.props}
                />
            </Styles>
        );
    }
}