# サーバーの基礎
## 1.Linuxとは何か
あなたが普段使用しているデバイス（スマートフォン、PC等）のOSと、Linuxの違いについて考え、列挙してください。
- macosとiosとlinuxの違い
  - オープンソースであるかどうか
  - macはGUI操作が優れていて、linuxは基本的にCLI操作
  - macOSとWindowsはライセンスで保護されているが、Linuxは自由に利用できる

ウェブサーバー以外でLinuxが使用されている例を3つ以上調べ、それぞれの用途でLinuxが選ばれている理由を考察してください。
  組み込みシステム（例：スマートフォン、IoTデバイス） 例: Androidスマートフォン、Raspberry Pi、ネットワークルーター、スマート家電
  オープンソース: カスタマイズが容易で、ライセンス費用がかからない。

  スーパーコンピュータ
  高いカスタマイズ性: スーパーコンピュータごとに最適化が可能で、ハードウェアの性能を最大限に活かせる。

有名なLinuxディストリビューションを3つ調べ、それぞれの特徴を簡単にまとめてください。
  Debian 安定性重視で、幅広いパッケージを提供する
  Ubuntu Debianをベースにした初心者向けのディストリビューション

## 2.基本的なLinuxコマンド
ホームディレクトリに「web_project」というディレクトリを作成し、その中に「css」、「js」、「images」というサブディレクトリを作成してください。
mkdir -p {css,js,images}

「web_project」ディレクトリに「index.html」というファイルを作成し、その後「index.html」を「home.html」にリネームしてください。
 mv ~/web_project/index.html ~/web_project/home.html

「css」ディレクトリに「style.css」というファイルを作成し、それを「web_project」直下にコピーしてください。その後、「css」ディレクトリ内の「style.css」を削除してください。
cp ~/web_project/css/style.css ~/web_project
 rm ~/web_project/css/style.css

上記の操作をすべて行った後、「web_project」ディレクトリの構造をls -Rコマンドを使って表示してください。
 ls -R ~/web_project

## 3.ファイルシステムの構造
