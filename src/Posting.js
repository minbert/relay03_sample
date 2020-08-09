import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Footer from './Footer';

function Posting() {
  const [inputs, setInputs] = useState({
    title: '',
    author:'',
    content: ''
  });
  const {title, author, content} = inputs;
  const submit = (event) => {
    event.preventDefault();
    alert("제목: " + title +'\n'
    + "작성자: " + author + '\n'
    + "내용: " + content);
    window.location.href='http://localhost:3000';
  }
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const reset = () => {
    const flag = window.confirm("작성을 취소하시겠습니까?");
    if(flag) {
      window.location.href='http://localhost:3000';
    }
    
  }
  return (
    <>
    <form onSubmit={submit}>
    <React.Fragment>
      <CssBaseline />
      <Box style={{padding:60}}>
        <Typography variant="h3" style={{marginBottom:30}}>new post</Typography>
        <Typography component="div" style={{height: '100vh' }}>
          <TextField
            name="title"
            onChange={onChange}
            value={title}
            id="outlined-full-width"
            label="Title"
            style={{ margin: 8 }}
            placeholder="제목을 입력하세요"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            name="author"
            onChange={onChange}
            value={author}
            id="outlined-full-width"
            label="Author"
            style={{ margin: 8 }}
            placeholder="아이디를 입력하세요"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            name="content"
            onChange={onChange}
            value={content}
            id="outlined-multiline-static"
            style={{margin:8}}
            multiline
            fullWidth
            rows={8}
            placeholder="내용을 입력해 주세요"
            variant="outlined"
          />
          <div style={{textAlign:"center"}}>
            <Button onClick={submit} variant="contained" color="primary" style={{marginRight:30}}>작성완료</Button>
            <Button onClick={reset} variant="contained">취소하기</Button>
          </div>
        </Typography>
      </Box>
    </React.Fragment>
    </form>
    <Footer />
    </>
  );
}

export default Posting;