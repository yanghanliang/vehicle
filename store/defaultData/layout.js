export default {
  type: 'layout',
  padding: '10px',
  display: 'flex',
  borderRadius: '10px',
  backgroundColor: '#fff',
  flexDirection: 'column',
  children: [
    {
      type: 'text',
      text: 'test',
      field: 'name',
      display: 'block',
      marginBottom: '5px',
    },
    {
      type: 'view',
      display: 'flex',
      paddingBottom: '15px',
      borderBottom: '1px solid #dddddd8a',
      children: [
        {
          src:
            'http://otest-oss.s3-ap-south-1.amazonaws.com/2684a0861a8468d9d6e4d5281a63301a.png',
          type: 'image',
          field: 'cover',
          width: '70px',
          height: '70px',
          marginRight: '10px',
        },
        {
          type: 'view',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          children: [
            {
              type: 'view',
              display: 'flex',
              children: [
                {
                  src: 'http://127.0.0.1:54414/insurance_logo.png',
                  type: 'image',
                  width: '22px',
                  height: '15px',
                  marginTop: '8px',
                  marginRight: '8px',
                },
                {
                  type: 'text',
                  flex: '1',
                  width: '50px',
                  wordWrap: 'break-word',
                  fontSize: '12px',
                  color: 'rgb(0, 44, 119)',
                  text: 'MarshMcLennan provides you with insuxrance services',
                },
              ],
            },
            {
              type: 'view',
              display: 'flex',
              justifyContent: 'space-between',
              children: [
                {
                  type: 'view',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  children: [
                    {
                      type: 'text',
                      text: 'Total income',
                      color: '#83898F',
                    },
                    {
                      type: 'text',
                      text: '36.00',
                      color: 'red',
                      fontWeight: 'bold',
                      field: 'total', // TODO 也可以放方法
                    },
                  ],
                },
                {
                  type: 'view',
                  flex: 1,
                  display: 'flex',
                  textAlign: 'right',
                  flexDirection: 'column',
                  children: [
                    {
                      type: 'text',
                      text: 'period',
                      color: '#83898F',
                    },
                    {
                      type: 'text',
                      text: '2 days',
                      fontWeight: 'bold',
                      field: 'period', // TODO 也可以放方法
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'view',
      display: 'flex',
      marginTop: '10px',
      justifyContent: 'space-between',
      children: [
        {
          type: 'view',
          display: 'flex',
          flexDirection: 'column',
          children: [
            {
              type: 'view',
              display: 'flex',
              children: [
                {
                  type: 'text',
                  text: 'Price: ',
                  color: '#83898F',
                },
                {
                  type: 'text',
                  text: ' ₹200.00',
                  color: '#000',
                  field: 'price',
                },
              ],
            },
            {
              type: 'view',
              display: 'flex',
              children: [
                {
                  type: 'text',
                  text: 'Remaining: ',
                  color: '#83898F',
                },
                {
                  type: 'text',
                  text: ' 100',
                  color: '#000',
                  field: 'remaining',
                },
              ],
            },
          ],
        },
        {
          margin: '0',
          text: 'Wanted',
          type: 'bottom',
          triggerType: 'click',
          handler: function (data) {
            console.log(data, '点击了')
          },
          backgroundColor: 'rgb(255, 195, 1)',
        },
      ],
    },
  ],
  data: [
    {
      name: '000',
      cover:
        'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/header/logo_e835568.png',
      total: '000',
      period: '000',
      price: '000',
      remaining: '000',
    },
    {
      name: '111',
      cover:
        'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/header/logo_e835568.png',
      total: '111',
      period: '111',
      price: '111',
      remaining: '111',
    },
  ],
}
