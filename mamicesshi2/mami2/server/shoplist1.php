<?php

# 01-先连接数据库
$db = mysqli_connect("127.0.0.1","root","","mamishoplist");
$page = ($_REQUEST["page"] -1 ) * 24;
$type = $_REQUEST["sortType"];
# 02-查询获取数据库所有的数据
if($type == 0)
{
  $sql = "SELECT * FROM shopdetail LIMIT $page, 24";
}elseif($type == 1){
  $sql = "SELECT * FROM shopdetail ORDER BY redprice DESC LIMIT $page, 24";
}else{
  $sql = "SELECT * FROM shopdetail ORDER BY redprice ASC LIMIT $page, 24";
}
$result = mysqli_query($db, $sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
 echo json_encode($data,true);

?>