namespace winME
{
    partial class MeMain
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            btnBegin = new Button();
            btnSubmit = new Button();
            panPaper = new FlowLayoutPanel();
            SuspendLayout();
            // 
            // btnBegin
            // 
            btnBegin.Location = new Point(1718, 1149);
            btnBegin.Name = "btnBegin";
            btnBegin.Size = new Size(131, 40);
            btnBegin.TabIndex = 1;
            btnBegin.Text = "开始出题";
            btnBegin.UseVisualStyleBackColor = true;
            btnBegin.Click += btnBegin_Click;
            // 
            // btnSubmit
            // 
            btnSubmit.Location = new Point(1718, 1212);
            btnSubmit.Name = "btnSubmit";
            btnSubmit.Size = new Size(131, 40);
            btnSubmit.TabIndex = 2;
            btnSubmit.Text = "提交答案";
            btnSubmit.UseVisualStyleBackColor = true;
            // 
            // panPaper
            // 
            panPaper.Location = new Point(338, -1);
            panPaper.Name = "panPaper";
            panPaper.Size = new Size(1212, 1290);
            panPaper.TabIndex = 3;
            // 
            // MeMain
            // 
            AutoScaleDimensions = new SizeF(13F, 28F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1888, 1289);
            Controls.Add(panPaper);
            Controls.Add(btnSubmit);
            Controls.Add(btnBegin);
            Name = "MeMain";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "数学基础训练";
            Load += MeMain_Load;
            ResumeLayout(false);
        }

        #endregion
        private Button btnBegin;
        private Button btnSubmit;
        private FlowLayoutPanel panPaper;
    }
}