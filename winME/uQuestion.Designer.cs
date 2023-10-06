namespace winME
{
    partial class uQuestion
    {
        /// <summary> 
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region 组件设计器生成的代码

        /// <summary> 
        /// 设计器支持所需的方法 - 不要修改
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            lblA = new Label();
            lblOP = new Label();
            lblB = new Label();
            lblEq = new Label();
            numAnswer = new NumericUpDown();
            lblAnswer = new Label();
            ((System.ComponentModel.ISupportInitialize)numAnswer).BeginInit();
            SuspendLayout();
            // 
            // lblA
            // 
            lblA.AutoSize = true;
            lblA.Font = new Font("Microsoft YaHei UI", 16F, FontStyle.Regular, GraphicsUnit.Point);
            lblA.Location = new Point(57, 36);
            lblA.Name = "lblA";
            lblA.Size = new Size(43, 50);
            lblA.TabIndex = 0;
            lblA.Text = "a";
            // 
            // lblOP
            // 
            lblOP.Font = new Font("Microsoft YaHei UI", 16F, FontStyle.Regular, GraphicsUnit.Point);
            lblOP.Location = new Point(112, 36);
            lblOP.Name = "lblOP";
            lblOP.Size = new Size(70, 50);
            lblOP.TabIndex = 1;
            lblOP.Text = "op";
            lblOP.TextAlign = ContentAlignment.MiddleCenter;
            // 
            // lblB
            // 
            lblB.AutoSize = true;
            lblB.Font = new Font("Microsoft YaHei UI", 16F, FontStyle.Regular, GraphicsUnit.Point);
            lblB.Location = new Point(194, 36);
            lblB.Name = "lblB";
            lblB.Size = new Size(46, 50);
            lblB.TabIndex = 2;
            lblB.Text = "b";
            // 
            // lblEq
            // 
            lblEq.AutoSize = true;
            lblEq.Font = new Font("Microsoft YaHei UI", 16F, FontStyle.Regular, GraphicsUnit.Point);
            lblEq.Location = new Point(252, 36);
            lblEq.Name = "lblEq";
            lblEq.Size = new Size(50, 50);
            lblEq.TabIndex = 3;
            lblEq.Text = "=";
            // 
            // numAnswer
            // 
            numAnswer.Font = new Font("Microsoft YaHei UI", 16F, FontStyle.Regular, GraphicsUnit.Point);
            numAnswer.Location = new Point(314, 33);
            numAnswer.Name = "numAnswer";
            numAnswer.Size = new Size(91, 55);
            numAnswer.TabIndex = 4;
            // 
            // lblAnswer
            // 
            lblAnswer.AutoSize = true;
            lblAnswer.Font = new Font("Microsoft YaHei UI", 16F, FontStyle.Regular, GraphicsUnit.Point);
            lblAnswer.ForeColor = Color.DarkGreen;
            lblAnswer.Location = new Point(417, 36);
            lblAnswer.Name = "lblAnswer";
            lblAnswer.Size = new Size(127, 50);
            lblAnswer.TabIndex = 5;
            lblAnswer.Text = "An√×";
            // 
            // uQuestion
            // 
            AutoScaleDimensions = new SizeF(13F, 28F);
            AutoScaleMode = AutoScaleMode.Font;
            Controls.Add(lblAnswer);
            Controls.Add(numAnswer);
            Controls.Add(lblEq);
            Controls.Add(lblB);
            Controls.Add(lblOP);
            Controls.Add(lblA);
            Name = "uQuestion";
            Size = new Size(600, 120);
            Load += uQuestion_Load;
            ((System.ComponentModel.ISupportInitialize)numAnswer).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label lblA;
        private Label lblOP;
        private Label lblB;
        private Label lblEq;
        private NumericUpDown numAnswer;
        private Label lblAnswer;
    }
}
