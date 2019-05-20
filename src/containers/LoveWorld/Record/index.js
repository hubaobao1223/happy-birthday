import React, { Component } from 'react'
import {Form, Input, Button, DatePicker, Upload, Icon, message} from 'antd'
import {formatDate} from 'util/common'
import { addLoveWorldItems, setCurrentDetailId } from 'store/action'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import './style.scss'

class Record extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar: null
    }
  }

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  handleSubmit=(e) => {
    e.preventDefault()
    let {form, addLoveWorldItems, setCurrentDetailId, history} = this.props
    form.validateFields((err, values) => {
      if (!err) {
        let item = this.getLoveWorldItem(values)
        addLoveWorldItems(item)
        setCurrentDetailId(item.id)
        history.push('/LoveWorld/DetailStory')
      } else {
        message.error('输入数据有误，请检查并重新输入')
      }
    })
  }

  getLoveWorldItem(formData) {
    const date = formatDate(new Date(formData.date), 'yyyy-MM-dd')
    let item = {
      id: date + formData.storyName,
      time: date,
      description: formData.description,
      avatar: this.state.avatar,
      pictures: formData.pictures.map((picture) => {
        return {url: picture.thumbUrl}
      }),
      videos: []
    }
    return item
  }

  handleAvatarChange=({fileList}) => {
    this.setState({
      avatar: fileList[0]
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    return (
      <Form {...formItemLayout} className='record-form' onSubmit={this.handleSubmit.bind(this)}>
        <Form.Item label='故事名称'>
          {getFieldDecorator('storyName', {
            'rules': [{required: true, message: '请输入故事名称'}]
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item label='故事描述'>
          {getFieldDecorator('description', {
            'rules': [{required: true, message: '请输入故事描述'}]
          })(
            <textarea />
          )}
        </Form.Item>
        <Form.Item label='日期'>
          {getFieldDecorator('date', {
            rules: [{ type: 'object', required: true, message: '请选择日期' }],
          })(
            <DatePicker />
          )}
        </Form.Item>
        <Form.Item label='封面照片' extra=''>
          {getFieldDecorator('avatar', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name='logo' action='/upload.do' listType='picture-card' onChange={this.handleAvatarChange}>
              {this.state.avatar ? null : (
                <Button>
                  <Icon type='upload' />
                </Button>
              )}
            </Upload>
          )}
        </Form.Item>
        <Form.Item label='图片' extra='建议不要上传超过三张图片'>
          {getFieldDecorator('pictures', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name='logo' action='/upload.do' listType='picture-card'>
              <Button>
                <Icon type='upload' />
              </Button>
            </Upload>,
          )}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addLoveWorldItems(data) {
      dispatch(addLoveWorldItems(data))
    },
    setCurrentDetailId(data) {
      dispatch(setCurrentDetailId(data))
    }
  }
}

const RecordComponent = connect(null, mapDispatchToProps)(Record)

export default withRouter(Form.create({ name: 'horizontal_login' })(RecordComponent))