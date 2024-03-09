- 安装依赖
```shell
pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/
```
### 2. 通过django创建项目
- 创建数据库
```shell
python manage.py makemigrations
python manage.py migrate
```
- 创建超级用户
```shell
python manage.py createsuperuser
```