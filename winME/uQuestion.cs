using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace winME
{
    public partial class uQuestion : UserControl
    {
        public uQuestion()
        {
            InitializeComponent();
        }

        public uQuestion(int a, int b, int op, int an)
        {
            InitializeComponent();

            lblA.Text = a.ToString();
            lblB.Text = b.ToString();

            if (op == 0)
            {
                lblOP.Text = "+";
            }
            else if (op == 1)
            {
                lblOP.Text = "-";
            }
            else
            {
                lblOP.Text = "×";
            }

            lblAnswer.Text = an.ToString();
            //lblAnswer.Visible = false;

        }

        private void uQuestion_Load(object sender, EventArgs e)
        {

        }
    }
}
