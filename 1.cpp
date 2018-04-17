#include <iostream>
#include <stdlib.h>
#include <fstream>
//#include <windows.h>
using namespace std;
struct PCB  
{
    char name;  //名字标识
    string state; //状态
    int time;   //执行时间
} ;     //进程控制块PCB
typedef struct PCB ElemType;

struct QNode
{
    ElemType data;
    struct QNode *next;
} ;  //链式队列结点
typedef struct QNode QNode;
typedef struct QNode *PNode;
typedef struct
{
    PNode front;
    PNode rear;
    int Q_num;
} LinkQueue; //链式队列
void Insert_Queue(LinkQueue &Q,ElemType e) //插入
{
    PNode ptr=(PNode)malloc(sizeof(QNode));
    if(!ptr)
    {
        cout<<"(Insert_Queue)动态分配结点失败!\n";
        exit(1);
    }
    Q.Q_num = Q.Q_num+1;
    ptr->data=e;
    ptr->next=NULL;
    Q.rear->next=ptr;
    Q.rear=ptr;
}
int Init_Queue(LinkQueue &Q) //初始化
{
    Q.front=Q.rear=(PNode)malloc(sizeof(QNode));
    if(!Q.front)
        exit(1);
    Q.front->next=NULL;
    Q.Q_num = 0;
    return 0;
}
int Delete_Queue(LinkQueue &Q,ElemType &e) //删除(头结点删除法)
{
    PNode ptr;
    if(Q.front==Q.rear)  //空队列
        return 1;
    ptr=Q.front->next;   //删除第一个元素
    Q.Q_num-=1;
    Q.front->next=ptr->next;
    e=ptr->data;
    if(Q.rear==ptr)
        Q.rear=Q.front;
    free(ptr);
    return 0;
}

int Empty_Queue(LinkQueue Q)  //判断是否为空队列，是1，否0
{
    return (Q.front==Q.rear?1:0);
}

int Full_Queue(LinkQueue &Q)
{
    if(Q.Q_num >= 5)
        return 0;
    else 
        return 1;
}

void Print_Queue(LinkQueue &Q) //打印队列元素
{
    PNode ptr;
    if(Q.front==Q.rear)  //队列为空时，返回提示信息
    {
        cout<<"\t\t队列空\n";
    }
    else
    {
        ptr=Q.front->next;
        while(ptr!=NULL)
        {
            cout<<"\t\tProcess's name : "<<ptr->data.name<<endl;
            ptr=ptr->next;
        }
    }
}
void Print_State(LinkQueue &Q_Ready,LinkQueue &Q_Running,LinkQueue &Q_Blocked)
{
    cout<<"\t-----------------------------\n";
    cout<<"\n\tStatus_Ready:\n";
    Print_Queue(Q_Ready);
    cout<<"\n\tStatus_Running: \n";
    Print_Queue(Q_Running);
    cout<<"\n\tStatus_Blocked: \n";
    Print_Queue(Q_Blocked);
    cout<<"\n\t-----------------------------\n";
}

int main()
{
    int num;
    char choose;
    ElemType e;
    LinkQueue Q_Ready,Q_Running,Q_Blocked;
    Init_Queue(Q_Ready);
    Init_Queue(Q_Blocked);
    Init_Queue(Q_Running);
    cout<<"\t请输入进入Ready态的进程数目： ";
    cin>>num;
    cout<<endl;
    for(int i=1; i<=num; i++)
    {
        cout<<"\t第"<<i<<"个进程----";
        cout<<"\n\t请输入进程名字: ";
        cin>>e.name;
        cout<<"\t请输入进程时间: "; 
        cin>>e.time;
        if (Full_Queue)
        {
            Insert_Queue(Q_Ready,e);
        }
       else
            Insert_Queue(Q_Blocked,e);
    }
    cout<<"\t***********************************进程状态转换分割线************************************\n";
    cout<<"\tN=创建进程(New),D=调度(Dispatch),P=显示当前(Display),Q(quit)" << endl;
    cout<<"\t请选择操作(N,D,P,Q)： ";
    cin>>choose;
    while(choose!='Q')
    {
        switch(choose)
        {
        case 'N'://N=创建进程(New)
        {
            cout<<"\t请输入进入Ready态的进程数目： ";
            cin>>num;
            cout<<endl;
            for(int i=1; i<=num; i++)
            {
                cout<<"\t第"<<i<<"个进程----";
                cout<<"\n\t请输入进程名字: ";
                cin>>e.name;
                cout<<"\t请输入进程时间: ";
                cin>>e.time;
                if(Full_Queue(Q_Ready))
                {
                    Insert_Queue(Q_Ready,e);
                }
                else
                    Insert_Queue(Q_Blocked,e);
            }
        }
        Print_State(Q_Ready,Q_Running,Q_Blocked);
        break;

        case 'D'://D=调度(Dispatch)
            if(!Empty_Queue(Q_Running))
            {
                Delete_Queue(Q_Running,e);
                e.time -= 1;
                if(e.time != 0)
                {
                    Insert_Queue(Q_Ready,e);
                }
                if(!Empty_Queue(Q_Ready))
                {
                    if (Full_Queue(Q_Ready))
                    {
                        if (!Empty_Queue(Q_Blocked))
                        {
                            Delete_Queue(Q_Blocked,e);
                            Insert_Queue(Q_Ready,e);
                        }
                    }
                }
                else 
                {
                    if (!Empty_Queue(Q_Blocked))
                        {
                            Delete_Queue(Q_Blocked,e);
                            Insert_Queue(Q_Running,e);
                        }
                }
            }
            else
            {
                if(!Empty_Queue(Q_Ready))
                {
                    Delete_Queue(Q_Ready,e);
                    Insert_Queue(Q_Running,e);
                    if (Full_Queue(Q_Ready))
                    {
                        if (!Empty_Queue(Q_Blocked))
                        {
                            Delete_Queue(Q_Blocked,e);
                            Insert_Queue(Q_Ready,e);
                        }
                    }
                }
                else 
                {
                    if (!Empty_Queue(Q_Blocked))
                        {
                            Delete_Queue(Q_Blocked,e);
                            Insert_Queue(Q_Running,e);
                        }
                }
            }
            Print_State(Q_Ready,Q_Running,Q_Blocked);
            break;
        
        case 'P'://P=输出各进程(Print)

            Print_State(Q_Ready,Q_Running,Q_Blocked);
            break;
        case 'Q':
            exit(1);
        default:
            cout<<"输出不符合规则，请重新输入！"<<endl; //操作异常处理
            break;
        }
     cout<<"\t***********************************进程状态转换分割线************************************\n";
     cout<<"\tN=创建进程(New),D=调度(Dispatch),P=显示当前(Display),Q(quit)" << endl;
     cout<<"\t请选择操作(N,D,P,Q)： ";
        cin>>choose;
    }
    return 0;
}
