import React from 'react';
import { Menu, Image, Container, Grid, Header, Dropdown, Form, Button, Divider, Table } from 'semantic-ui-react';
import {
    JamesCard,
    JamesWrapper,
    JamesButton,
    JamesButtonGroup,
    JamesImage
} from 'themes/JamesStyles';
import {
    MenuItemText,
    JamesHeader,
    JamesNormalText
} from 'themes/JamesText';
import JamesLineGraph from 'themes/JamesLineGraph';
import JamesListTable from 'themes/JamesListTable';
import backIcon from 'assets/images/back.svg';
import nextIcon from 'assets/images/next.svg';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};


const Dashboard = (props) => {
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
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <JamesNormalText size='16px'>결제건수</JamesNormalText>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign='middle' textAlign='right'>
                                        <JamesImage src={nextIcon} />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            300 건
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <JamesNormalText size='16px'>환불건수</JamesNormalText>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign='middle' textAlign='right'>
                                        <JamesImage src={backIcon} />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            3 건
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <JamesNormalText size='16px'>결제금액</JamesNormalText>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign='middle' textAlign='right'>
                                        <JamesImage src={nextIcon} />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            2,300,500
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <JamesNormalText size='16px'>환불금액</JamesNormalText>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign='middle' textAlign='right'>
                                        <JamesImage src={backIcon} />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            12,000
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <JamesHeader size={1}>어제 거래현황</JamesHeader>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <JamesLineGraph data={data} />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Table striped>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell>날짜</Table.HeaderCell>
                                                    <Table.HeaderCell>결제건수</Table.HeaderCell>
                                                    <Table.HeaderCell>환불건수</Table.HeaderCell>
                                                    <Table.HeaderCell>결제금액</Table.HeaderCell>
                                                    <Table.HeaderCell>환불금액</Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>

                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell>2020-05-30</Table.Cell>
                                                    <Table.Cell>4</Table.Cell>
                                                    <Table.Cell>1</Table.Cell>
                                                    <Table.Cell>30,000</Table.Cell>
                                                    <Table.Cell>1,000</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>2020-04-30</Table.Cell>
                                                    <Table.Cell>10</Table.Cell>
                                                    <Table.Cell>1</Table.Cell>
                                                    <Table.Cell>130,000</Table.Cell>
                                                    <Table.Cell>1,000</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>2020-03-01</Table.Cell>
                                                    <Table.Cell>54</Table.Cell>
                                                    <Table.Cell>1</Table.Cell>
                                                    <Table.Cell>70,300</Table.Cell>
                                                    <Table.Cell>13,000</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>2020-02-05</Table.Cell>
                                                    <Table.Cell>4</Table.Cell>
                                                    <Table.Cell>1</Table.Cell>
                                                    <Table.Cell>30,000</Table.Cell>
                                                    <Table.Cell>1,000</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <JamesHeader size={1}>공지사항</JamesHeader>
                    </Grid.Column>
                    <Grid.Column>
                        <JamesHeader size={1}>고객지원</JamesHeader>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <JamesCard>
                            <Table striped>
                                {/* <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>날짜</Table.HeaderCell>
                                        <Table.HeaderCell>결제건수</Table.HeaderCell>
                                        <Table.HeaderCell>환불건수</Table.HeaderCell>
                                        <Table.HeaderCell>결제금액</Table.HeaderCell>
                                        <Table.HeaderCell>환불금액</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header> */}

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>제20기 결산공고</Table.Cell>
                                        <Table.Cell>2020-05-30</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>제19기 결산공고</Table.Cell>
                                        <Table.Cell>2019-05-30</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>제18기 결산공고</Table.Cell>
                                        <Table.Cell>2018-05-30</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>` </Table.Cell>
                                        <Table.Cell>` </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>`</Table.Cell>
                                        <Table.Cell>`</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </JamesCard>
                    </Grid.Column>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column verticalAlign='middle' textAlign='center'>
                                        <JamesHeader size={2}>고객지원센터</JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column verticalAlign='middle' textAlign='center'>
                                        <JamesHeader size={4}>월~금 09:00 ~ 18:00</JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column verticalAlign='middle' textAlign='center'>
                                        <JamesHeader size={1} color='orange'>02-6296-6835</JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column verticalAlign='middle' textAlign='center'>
                                        <JamesHeader size={3} color='black'>apay@hyundai-autoever.com</JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );

}

export default Dashboard;