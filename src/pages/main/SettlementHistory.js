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
    { id: 1, name: "재직증명서 발급 서비스 인스턴스 #1", endpoint: "http://10.10.101.1:8080", status: true, serviceId: 1, siteName: "현대카드" },
    { id: 1, name: "재직증명서 발급 서비스 인스턴스 #1", endpoint: "http://10.10.101.1:8080", status: true, serviceId: 1, siteName: "현대카드" },
    { id: 1, name: "재직증명서 발급 서비스 인스턴스 #1", endpoint: "http://10.10.101.1:8080", status: true, serviceId: 1, siteName: "현대카드" },
    { id: 1, name: "재직증명서 발급 서비스 인스턴스 #1", endpoint: "http://10.10.101.1:8080", status: true, serviceId: 1, siteName: "현대카드" }
]

function onFetchData() {

}


const SettlementHistory = (props) => {
    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
            show: false
        },
        {
            Header: 'Instance name',
            accessor: 'name'
        },
        {
            Header: 'Site name',
            accessor: 'siteName',
        },
        {
            Header: 'Service name',
            accessor: 'serviceName'
        },
        {
            Header: 'Endpoint',
            accessor: 'endpoint'
        },
        {
            Header: 'Status',
            accessor: 'status'
        },
    ]

    return (
        <Container style={{ width: '75%' }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <JamesHeader size={1}>정산내역</JamesHeader>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={4}>
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
                                        <JamesNormalText size='15px'>결제수수료</JamesNormalText>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            1,200
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
                                        <JamesNormalText size='15px'>VAT</JamesNormalText>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            120
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
                                        <JamesNormalText size='15px'>정산금액</JamesNormalText>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            142,880
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
                                <Grid.Row columns={4}>
                                    <Grid.Column width={3}>
                                        <JamesDatePicker
                                            isClearable
                                            dateFormat="yyyy-MM-dd"
                                            placeholderText='시작일'
                                            // selected={this.state.startDate}
                                            // onChange={this.setStartDate}
                                            formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <JamesDatePicker
                                            isClearable
                                            dateFormat="yyyy-MM-dd"
                                            placeholderText='종료일'
                                            // selected={this.state.startDate}
                                            // onChange={this.setStartDate}
                                            formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={7}>
                                        <JamesButtonGroup>
                                            <JamesButton color='#4280F5'>이번달</JamesButton>
                                            <JamesButton color='#4280F5' negativestyle>오늘</JamesButton>
                                            <JamesButton color='#4280F5' negativestyle>1개월</JamesButton>
                                            <JamesButton color='#4280F5' negativestyle>3개월</JamesButton>
                                            <JamesButton color='#4280F5' negativestyle>6개월</JamesButton>
                                        </JamesButtonGroup>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
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

export default SettlementHistory;