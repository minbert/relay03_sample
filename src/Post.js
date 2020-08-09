import React from 'react';
import Box from '@material-ui/core/Box';
import { CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const response = {
    data:{
      "board_id":1, // 게시판 id(tab 번호)
      "post":[{
        "post_id": 1,
        "title": "Boostcamp에 오신 것을 환영합니다",
        "author": "김계란",
        "content": "boostcamp 너무 좋아용~ ",
        "date": "2020-08-08-15:32:10" // 2020년 8월 27일 15시 32분"
      }]
    } 
}

function Post() {
    const moveMain = () => {
        window.location.href='http://localhost:3000';
        
    }
    const {title, author, content, date} = response.data.post[0]
    return (
        <React.Fragment>
        <CssBaseline /> 
        <Box style={{padding:60}}>
            <Typography variant="h5" style={{marginBottom:30}}>{title}</Typography>
            <div>
                <div style={{borderBottom:'1px solid black', marginBottom:10, padding:10}}>
                    <div>작성자: {author}</div>
                    <div>{date}</div>
                </div>
                <div style={{padding:10, height:400, borderBottom:'1px solid black'}}>{content}</div>
                <div style={{textAlign:'center', padding:10}}>
                    <Button onClick={moveMain} variant="contained" color="primary">목록으로</Button>
                </div>
            </div>
        </Box>
        </React.Fragment>
    );
}

export default Post;