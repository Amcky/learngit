<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>添加社团信息</title>
</head>
<script  type="text/javascript" src="${pageContext.request.contextPath }/js/datepicker/WdatePicker.js"></script>
<body>
	<form action="clubadmin2_addClub" method="post"
		enctype="multipart/form-data">
		<table>
			<tr>
				<td>社团名称:<input type="text" id="text" name="club.cname" /></td>
			</tr>
			<tr>
				<td class="tdBg" width="200px">社团创建时间：</td>
				<td><s:textfield name="club.buildtime" readonly="true" onfocus="WdatePicker({'skin':'whyGreen','dateFmt':'yyyy-MM-dd HH:mm:ss'});" /></td>
			</tr>

			<tr>
				<td>主攻方向:<input type="text" name="club.subject" /></td>
			</tr>
			<tr>
				<td>社团成员人数： <input type="text" name="club.members" /></td>
			</tr>
			<tr>
				<td>社团地理位置： <input type="text" name="club.place" /></td>
			</tr>
			<tr>
				<td>社团指导老师： <input type="text" name="club.tname" /></td>
			</tr>
			<tr>
				<td>社团介绍： <input type="text" name="club.introduce" /></td>
			</tr>
			<tr>
				<!-- <td width="18%" align="center" bgColor="#f5fafe" class="ta_01">
					图片：</td> -->
				<td class="ta_01" bgColor="#ffffff" colspan="3">图片：<input
					type="file" name="upload" /></td>
			</tr>
			<tr>
				<td><input type="submit" value="提交" /></td>
				<!--   链接：http://pan.baidu.com/s/1eRUC1P4 密码：afkr -->
			</tr>
		</table>
	</form>
</body>
</html>