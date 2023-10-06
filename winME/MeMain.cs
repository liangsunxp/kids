namespace winME
{
    public partial class MeMain : Form
    {
        public MeMain()
        {
            InitializeComponent();
        }

        private void MeMain_Load(object sender, EventArgs e)
        {

        }

        private void btnBegin_Click(object sender, EventArgs e)
        {
            panPaper.Controls.Clear();

            for (int i = 0; i < 20; i++)
            {
                //生成一个1到9的随机数
                Random random = new Random();
                int randomNumber = random.Next(1, 10);

                int a = random.Next(1, 10);
                int b = random.Next(1, 10);
                int an = 0;
                var op = random.Next(0, 3);
                if (op == 1)
                {
                    if (a < b)
                    {
                        int temp = b;
                        b = a;
                        a = temp;
                    }
                }

                if (op == 0)
                {
                    an = a + b;
                }
                if (op == 1)
                {
                    an = a - b;
                }
                if (op == 2)
                {
                    an = a * b;
                }

                var c = new uQuestion(a, b, op, an);

                panPaper.Controls.Add(c);

            }
        }
    }
}