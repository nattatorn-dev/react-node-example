import React, { Component } from 'react'
// import axios from 'axios'
// var URL = require('url-parse')

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = { url: 'test', err: null }
  }
  componentDidMount() {
    // axios
    //   .get('https://drive.google.com/file/d/0B1ik1ZZAsFh4TlQ5SmR0SHhDMzQ/view')
    //   .then(function(html) {
    //     const streamTagSelector = html.data
    //       .split('script')
    //       .filter(e => e.indexOf('fmt_stream_map') !== -1)[0]
    //       .split(',["')
    //       .filter(
    //         e =>
    //           e.indexOf('fmt_stream_map') !== -1 || e.indexOf('fmt_list') !== -1
    //       )
    //     const provide = streamTagSelector.reduce((p, c, k) => {
    //       return Object.assign(p, {
    //         [c.substr(0, c.indexOf('",'))]: c.substr(
    //           c.indexOf('",') + 1,
    //           c.length
    //         )
    //       })
    //     }, {})
    //     const fmtList = provide['fmt_list']
    //     const fmtStreamMap = provide['fmt_stream_map']
    //       .replace(`,"`, '')
    //       .split(',')
    //       .reduce((p, c, k) => {
    //         return Object.assign(p, {
    //           [c.substr(0, c.indexOf('|'))]: c.substr(
    //             c.indexOf('|') + 1,
    //             c.length
    //           )
    //         })
    //       }, {})
    //
    //     console.log('fmtStreamMap', fmtStreamMap)
    //     // const url = new URL(
    //     //   `https://r2---sn-30a7dnel.c.drive.google.com/videoplayback?id\u003d6e07f8da470c8bc6\u0026itag\u003d18\u0026source\u003dwebdrive\u0026requiressl\u003dyes\u0026ttl\u003dtransient\u0026mm\u003d30\u0026mn\u003dsn-30a7dnel\u0026ms\u003dnxu\u0026mv\u003dm\u0026pl\u003d24\u0026sc\u003dyes\u0026ei\u003dPDwpWeSyHYPiqQWOs4WYAw\u0026driveid\u003d0B1ik1ZZAsFh4Z2E1RkRYMmJfNW8\u0026mime\u003dvideo/mp4\u0026lmt\u003d1495719397466887\u0026mt\u003d1495874549\u0026ip\u003d1.179.240.213\u0026ipbits\u003d0\u0026expire\u003d1495889020\u0026cp\u003dQVJOV0lfWFBQQVhNOjF1VERDYmZUNE8x\u0026sparams\u003dip%2Cipbits%2Cexpire%2Cid%2Citag%2Csource%2Crequiressl%2Cttl%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Csc%2Cei%2Cdriveid%2Cmime%2Clmt%2Ccp\u0026signature\u003d37843844BBA1CB0AC9A741A1C406CCD683BE1681.2643F0BE60D7E332FA0D075539BE82561F8E0C44\u0026key\u003dck2\u0026app\u003dtexmex`
    //     // )
    //     this.setState({ url: fmtStreamMap })
    //   })
    //   .catch(function(err) {
    //     this.setState({ err })
    //   })
  }
  render() {
    return (
      <div>
        {this.state.url}
      </div>
    )
  }
}
