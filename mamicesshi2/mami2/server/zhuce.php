<?php
# zs 123
# 001 先连接数据库
$db = mysqli_connect("127.0.0.1", "root", "", "zhuce");
# 002 先获取用户提交的用户名和密码
$phonenumber = $_REQUEST["phonenumber"];


# 003 根据获取的数据去数据库中进行对比(匹配)
$sql = "SELECT * FROM zhucenum WHERE phonenumber = '$phonenumber'";
// echo $sql
$result = mysqli_query($db, $sql);
$response = array("status"=>"","msg"=>"");
if(mysqli_num_rows($result) == 1)
{
  /* 该用户名已经被注册！！ */
  $response["status"] = "error";
  $response["msg"] = " 该用户名已经被注册！！";
  echo json_encode($response,true);
}else{
  /* 执行插入语句 */
  $insertSql = "INSERT INTO `zhucenum` (`id`, `phonenumber` ) VALUES (NULL, '$phonenumber')";
  $res = mysqli_query($db, $insertSql);
  // echo $insertSql ;
  $response["status"] = "ok";
  $response["msg"] = " 恭喜您注册成功！";
  echo json_encode($response, true);
}

?>