--  본인의 mysql 서버에 이 쿼리를 입력하시면 됩니다
CREATE database KOSTADB;

create table user_table (
	user_id int not null primary key,
	email varchar(60) not null,
	pw varchar(50) not null,
	nickname varchar(20) not null,
	birth date null,
)

create table like_table (
	`event_key` int not null primary key,
	`user_id` int not null,
	`board_key` int not null,
	foreign key (`user_id`) references user_table (`user_id`),
	foreign key (`board_key`) references event_table (`board_key`)
)

create table event_table (
	`board_key` int not null primary key,
	`user_id` int not null, -- ��� �� �̵� �ܷ�Ű�� ����
	`title` varchar(20) not null ,
	`img` varchar(200) not null,
	`email` varchar(60) not null,
	`content` varchar(3500) not null,
	`likes` int null, 
	`start_date` date not null,
	`end_date` date not null,
	`ticket` int null,
	`online` tinyint(1) null,
	`offline` tinyint(1) null,
	`address` varchar(100) null,
	`max_number` int null,
	`club_status` tinyint(1) null,
	`tag` varchar(10) null,
	foreign key (`user_id`) references user_table (`user_id`)	
)

create table comment_table (
	`comment_key` int not null primary key,
	`board_key` int not null,
	`user_id` int not null,
	`content` varchar(150) not null,
	`date` varchar(150) not null,
	`parent_nickname` varchar(30) null,
	`parent_conent` varchar(150) null,
	foreign key (`user_id`) references user_table (`user_id`),
	foreign key (`board_key`) references event_table (`board_key`)
)