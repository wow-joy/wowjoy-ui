import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as done } from "@src/static/medias/svg/done.svg";
import { ReactComponent as wrong } from "@src/static/medias/svg/wrong.svg"

const Done = styled(done)`
    width:20px;
    height:20px;
    vertical-align:middle;
    position:absolute;
    right:0px;
    display:${p=>p.show === 1?'inline-block':'none'};
`;

const Wrong = styled(wrong)`
    width:20px;
    height:20px;
    vertical-align:middle;
    position:absolute;
    right:0px;
    display:${p=>p.show === 1?'inline-block':'none'};
`;

const Tit = styled.div`
    float:right;
    margin-right:20px;
`;

const UploadBase = styled.div`
    padding: 4px 10px;
    height: 28px;
    line-height: 20px;
    position: relative;
    cursor: pointer;
    color: #888;
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: inline-block;
    font-size:14px;
    input{
        position: absolute;
        right: 0;
        top: 0;
        width:100%;
        height:100%;
        opacity: 0;
        filter: alpha(opacity=0);
        cursor: pointer;
    }
    :hover{
        color: #444;
        background: #eee;
        border-color: #ccc;
        text-decoration: none;
    }
`;

const FileList = styled.div`
    padding: 4px 10px;
    height: 28px;
    line-height: 20px;
    position: relative;
    color: ${p=>p.show === 1?'rgb(243, 105, 105)':'#888'};
`;

class Upload extends PureComponent{

    static defaultProps={
        accept:'',
        name:'file'
    }

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state={
            value: '',
            tit:'',
            show1:0,
            show2:0,
            name: props.name,
            action: props.action
        }
    }

    upload = () => {
        const {name,action} = this.state
        this.setState({
            value:this.fileInput.current.files[0].name
        })
        const data = new FormData();
        data.append(name, this.fileInput.current.files[0]);  //相当于 input:file 中的name属性
        fetch( action , {
            method: 'POST',
            body: data
        })
        .then(response => 
            this.setState({
                show1:1,
                show2:0,
                tit:'上传成功',
            })
        )
        .catch(error => 
            this.setState({
                show1:0,
                show2:1,
                tit:'上传失败',
            })
        )
    };

    render(){
        const { value,tit,show1,show2 } = this.state
        const {accept,name} = this.props
        return(
            <div>
                <UploadBase>
                    点击这里上传文件
                    <input type="file" name={name} accept={accept} ref={this.fileInput}  onChange={this.upload}/>
                </UploadBase>
                <FileList show={show2}>
                    {value}
                    <Done show={show1} />
                    <Wrong show={show2} />
                    <Tit>{tit}</Tit>
                </FileList>
            </div>
        )
    }
}


Upload.propTypes = {
    className: PropTypes.string,
    defaultStyles: PropTypes.string,
    children: PropTypes.node,
    accept:PropTypes.string,
    name:PropTypes.string,
    action:PropTypes.string,
};

export default Upload;