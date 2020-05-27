import React from 'react';
import { Menu, Image, Container, Grid, Header, Dropdown, Form, Button } from 'semantic-ui-react';
import {
    JamesCard,
    JamesWrapper,
    JamesButton,
    JamesButtonGroup
} from 'themes/JamesStyles';
import {
    MenuItemText,
    JamesHeader,
    JamesNormalText
} from 'themes/JamesText';
import {
    JamesInput,
    JamesForm,
    JamesDropdown,
    JamesDatePicker
} from 'themes/JamesForm';
import JamesListTable from 'themes/JamesListTable';
import moreIcon from 'assets/images/btn_more.png';


//TODO api call
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const data = [
    { id: 1, payDate: "2020-05-30 23:00:03", customer: "홍길동", amount: "10,000", orderNumber: "123456789", payType: "출금/이체", bank: "신한은행" },
    { id: 2, payDate: "2020-05-30 22:00:03", customer: "박길동", amount: "10,000", orderNumber: "123456789", payType: "출금/이체", bank: "국민은행" },
    { id: 3, payDate: "2020-05-30 21:00:03", customer: "이길동", amount: "10,000", orderNumber: "123456789", payType: "출금/이체", bank: "하나은행" },
    { id: 4, payDate: "2020-05-30 20:00:03", customer: "김길동", amount: "10,000", orderNumber: "123456789", payType: "출금/이체", bank: "신한은행" },
    { id: 5, payDate: "2020-05-30 13:00:03", customer: "임길동", amount: "10,000", orderNumber: "123456789", payType: "출금/이체", bank: "국민은행" },
    { id: 6, payDate: "2020-05-30 12:00:03", customer: "여길동", amount: "10,000", orderNumber: "123456789", payType: "출금/이체", bank: "하나은행" },
    { id: 7, payDate: "2020-05-30 10:00:03", customer: "최길동", amount: "10,000", orderNumber: "123456789", payType: "출금/이체", bank: "신한은행" },
    { id: 8, payDate: "2020-05-30 09:00:03", customer: "권길동", amount: "10,000", orderNumber: "123456789", payType: "출금/이체", bank: "신한은행" },
]

function onFetchData() {

}


const PaymentHistory = (props) => {
    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
            show: false
        },
        {
            Header: '결제일',
            accessor: 'payDate'
        },
        {
            Header: '구매자명',
            accessor: 'customer',
        },
        {
            Header: '결제금액',
            accessor: 'amount',
        },
        {
            Header: '주문번호',
            accessor: 'orderNumber'
        },
        {
            Header: '결제구분',
            accessor: 'payType'
        },
        {
            Header: '은행',
            accessor: 'bank'
        },
    ]

    return (
        <Container style={{ width: '75%' }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <JamesHeader size={1}>결제내역</JamesHeader>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={4}>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesNormalText size='15px'>총 결제요청 금액</JamesNormalText>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            154,200
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesNormalText size='15px'>결제성공 금액</JamesNormalText>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            144,200
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesNormalText size='15px'>결제실패 금액</JamesNormalText>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px' color='#FC6386'>
                                            {/* TODO api call */}
                                            154,200
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesNormalText size='15px'>잔여금액</JamesNormalText>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            654,000
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row columns={5}>
                                    <Grid.Column >
                                        <JamesDatePicker
                                            isClearable
                                            dateFormat="yyyy-MM-dd"
                                            placeholderText='시작일'
                                            // selected={this.state.startDate}
                                            // onChange={this.setStartDate}
                                            formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
                                        />
                                    </Grid.Column>
                                    <Grid.Column >
                                        <JamesDatePicker
                                            isClearable
                                            dateFormat="yyyy-MM-dd"
                                            placeholderText='종료일'
                                            // selected={this.state.startDate}
                                            // onChange={this.setStartDate}
                                            formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <JamesButtonGroup>
                                            <JamesButton color='#4280F5'>이번달</JamesButton>
                                            <JamesButton color='#4280F5' negativestyle>오늘</JamesButton>
                                            <JamesButton color='#4280F5' negativestyle>1개월</JamesButton>
                                            <JamesButton color='#4280F5' negativestyle>3개월</JamesButton>
                                            <JamesButton color='#4280F5' negativestyle>6개월</JamesButton>
                                        </JamesButtonGroup>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={5}>
                                    <Grid.Column>
                                        <JamesForm>
                                            <JamesForm.Select
                                                fluid
                                                label='결제구분'
                                                options={options}
                                                placeholder='전체'
                                            />
                                        </JamesForm>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <JamesForm>
                                            <JamesForm.Input
                                                fluid
                                                label='구매자명'
                                                placeholder='홍길동'
                                            />
                                        </JamesForm>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <JamesForm>
                                            <JamesForm.Input
                                                fluid
                                                label='주문번호'
                                                placeholder='123456789'
                                            />
                                        </JamesForm>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <JamesForm>
                                            <JamesForm.Select
                                                fluid
                                                label='은행'
                                                options={options}
                                                placeholder='전체'
                                            />
                                        </JamesForm>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <div style={{ position: 'absolute', bottom: '0px' }}>
                                            <JamesButton color='#E4EDFE' style={{ color: '#4280F5' }}>검색</JamesButton>
                                            <JamesButton color='#4280F5' negativestyle>초기화</JamesButton>
                                        </div>
                                       
                                    </Grid.Column>
                                    
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <JamesCard>
                            <JamesListTable
                                link={0}
                                columns={columns}
                                data={data}
                                count={10}
                                // onClick={(cellValue) => this.handleInstanceNameClick(cellValue)}
                                onFetchData={onFetchData}
                                // pageCount={pageCount}
                                // search={searchCondition}
                                // totalCount={totalCount}
                            />
                        </JamesCard>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row></Grid.Row>
            </Grid>
        </Container>
    );

}

export default PaymentHistory;