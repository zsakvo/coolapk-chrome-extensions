function transEmoji(msg, margin) {
  return msg
    .replace(
      /\[哈哈哈\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1_hahaha.png"></img>'
    )
    .replace(
      /\[惊讶\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_2_jingya.png"></img>'
    )
    .replace(
      /\[呲牙\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_3_ciya.png"></img>'
    )
    .replace(
      /\[流泪\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_4_liulei.png"></img>'
    )
    .replace(
      /\[可爱\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_5_keai.png"></img>'
    )
    .replace(
      /\[微笑\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_6_weixiao.png"></img>'
    )
    .replace(
      /\[呵呵\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_7_hehe.png"></img>'
    )
    .replace(
      /\[撇嘴\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_8_piezui.png"></img>'
    )
    .replace(
      /\[色\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_9_se.png"></img>'
    )
    .replace(
      /\[傲慢\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_10_aoman.png"></img>'
    )
    .replace(
      /\[疑问\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_11_yiwen.png"></img>'
    )
    .replace(
      /\[无语\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_12_wuyu.png"></img>'
    )
    .replace(
      /\[坏笑\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_13_huaixiao.png"></img>'
    )
    .replace(
      /\[鄙视\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_14_bishi.png"></img>'
    )
    .replace(
      /\[发怒\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_15_fanu.png"></img>'
    )
    .replace(
      /\[爆怒\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_104_baonu.png"></img>'
    )
    .replace(
      /\[托腮\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_16_tuosai.png"></img>'
    )
    .replace(
      /\[吐舌\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_17_tushe.png"></img>'
    )
    .replace(
      /\[汗\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_18_han.png"></img>'
    )
    .replace(
      /\[抠鼻\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_19_koubi.png"></img>'
    )
    .replace(
      /\[亲亲\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_20_qinqin.png"></img>'
    )
    .replace(
      /\[喷血\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_21_penxue.png"></img>'
    )
    .replace(
      /\[笑眼\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_22_xiaoyan.png"></img>'
    )
    .replace(
      /\[睡\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_23_shui.png"></img>'
    )
    .replace(
      /\[捂嘴笑\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_24_wuzuixiao.png"></img>'
    )
    .replace(
      /\[再见\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_25_zaijian.png"></img>'
    )
    .replace(
      /\[可怜\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_26_kelian.png"></img>'
    )
    .replace(
      /\[笑哭\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_31_xiaoku.png"></img>'
    )
    .replace(
      /\[强\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_27_qiang.png"></img>'
    )
    .replace(
      /\[弱\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_28_ruo.png"></img>'
    )
    .replace(
      /\[抱拳\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_29_baoquan.png"></img>'
    )
    .replace(
      /\[ok\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_30_ok.png"></img>'
    )
    .replace(
      /\[嘿哈\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_32_heiha.png"></img>'
    )
    .replace(
      /\[捂脸\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_33_wulian.png"></img>'
    )
    .replace(
      /\[机智\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_34_jizhi.png"></img>'
    )
    .replace(
      /\[耶\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_35_ye.png"></img>'
    )
    .replace(
      /\[我最美\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_38_wozuimei.png"></img>'
    )
    .replace(
      /\[酷\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_36_ku.png"></img>'
    )
    .replace(
      /\[黑线\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_43_heixian.png"></img>'
    )
    .replace(
      /\[喷\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_44_pen.png"></img>'
    )
    .replace(
      /\[阴险\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_45_yinxian.png"></img>'
    )
    .replace(
      /\[难过\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_46_nanguo.png"></img>'
    )
    .replace(
      /\[委屈\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_47_weiqu.png"></img>'
    )
    .replace(
      /\[吃瓜\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_51_chigua.png"></img>'
    )
    .replace(
      /\[喝酒\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_52_hejiu.png"></img>'
    )
    .replace(
      /\[噗\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_53_pu.png"></img>'
    )
    .replace(
      /\[微微一笑\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_48_weiweiyixiao.png"></img>'
    )
    .replace(
      /\[欢呼\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_49_huanhu.png"></img>'
    )
    .replace(
      /\[白眼\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_84_baiyan.png"></img>'
    )
    .replace(
      /\[耐克嘴\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_81_naikezui.png"></img>'
    )
    .replace(
      /\[t耐克嘴\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_105_tnaikezui.png"></img>'
    )
    .replace(
      /\[害羞\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_97_haixiu.png"></img>'
    )
    .replace(
      /\[无奈\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_98_wunai.png"></img>'
    )
    .replace(
      /\[皱眉\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_99_zhoumei.png"></img>'
    )
    .replace(
      /\[qqdoge\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_100_qqdoge.png"></img>'
    )
    .replace(
      /\[发呆\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_102_fadai.png"></img>'
    )
    .replace(
      /\[舒服\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_106_shufu.png"></img>'
    )
    .replace(
      /\[懒得理\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_107_landeli.png"></img>'
    )
    .replace(
      /\[不开心\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_108_bukaixin.png"></img>'
    )
    .replace(
      /\[挑眉坏笑\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_109_tiaomeihuaixiao.png"></img>'
    )
    .replace(
      /\[害怕\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1010_haipa.png"></img>'
    )
    .replace(
      /\[哼唧\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1011_hengji.png"></img>'
    )
    .replace(
      /\[挨打\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1012_aida.png"></img>'
    )
    .replace(
      /\[假笑\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1014_jiaxiao.png"></img>'
    )
    .replace(
      /\[偷看\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1015.png"></img>'
    )
    .replace(
      /\[喝茶\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1016_hecha.png"></img>'
    )
    .replace(
      /\[哦吼吼\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1017_houhouhou.png"></img>'
    )
    .replace(
      /\[掩面笑\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1018_yanmianxiao.png"></img>'
    )
    .replace(
      /\[表面哭泣\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1019_biaomiankuqi.png"></img>'
    )
    .replace(
      /\[表面开心\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1020_biaomiankaixin.png"></img>'
    )
    .replace(
      /\[滑稽\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_62_huaji.png"></img>'
    )
    .replace(
      /\[流汗滑稽\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_63_liuhanhuaji.png"></img>'
    )
    .replace(
      /\[受虐滑稽\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_64_shounuehuaji.png"></img>'
    )
    .replace(
      /\[cos滑稽\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_65_coshuaji.png"></img>'
    )
    .replace(
      /\[斗鸡眼滑稽\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_66_doujiyanhuaji.png"></img>'
    )
    .replace(
      /\[墨镜滑稽\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_67_mojinghuaji.png"></img>'
    )
    .replace(
      /\[小嘴滑稽\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1013_xiaozuihuaji.png"></img>'
    )
    .replace(
      /\[doge\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_37_doge.png"></img>'
    )
    .replace(
      /\[doge笑哭\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_56_dogexiaoku.png"></img>'
    )
    .replace(
      /\[doge呵斥\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_57_dogehechi.png"></img>'
    )
    .replace(
      /\[doge原谅ta\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_58_dogeyuanliangta.png"></img>'
    )
    .replace(
      /\[喵喵\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_82_miaomiao.png"></img>'
    )
    .replace(
      /\[二哈\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_59_erha.png"></img>'
    )
    .replace(
      /\[二哈盯\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_95_erhading.png"></img>'
    )
    .replace(
      /\[爱心\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_40_aixin.png"></img>'
    )
    .replace(
      /\[心碎\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_50_xinsui.png"></img>'
    )
    .replace(
      /\[玫瑰\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_41_meigui.png"></img>'
    )
    .replace(
      /\[凋谢\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_42_diaoxie.png"></img>'
    )
    .replace(
      /\[菜刀\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_39_caidao.png"></img>'
    )
    .replace(
      /\[牛啤\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_103_nb.png"></img>'
    )
    .replace(
      /\[py交易\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_101_pyjiaoyi.png"></img>'
    )
    .replace(
      /\[绿药丸\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_55_lvyaowan.png"></img>'
    )
    .replace(
      /\[红药丸\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_54_hongyaowan.png"></img>'
    )
    .replace(
      /\[酷安\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_60_kuan.png"></img>'
    )
    .replace(
      /\[酷安钓鱼\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_1021_kuandiaoyu.png"></img>'
    )
    .replace(
      /\[绿帽\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_61_lvmao.png"></img>'
    )
    .replace(
      /\[酷安绿帽\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_96_kuanlvmao.png"></img>'
    )
    .replace(
      /\[火把\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_83_huoba.png"></img>'
    )
    .replace(
      /\[酷币\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_coolb.png"></img>'
    )
    .replace(
      /\[酷币1分\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_onef.png"></img>'
    )
    .replace(
      /\[酷币2分\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_twof.png"></img>'
    )
    .replace(
      /\[酷币5分\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_fivef.png"></img>'
    )
    .replace(
      /\[酷币1毛\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_onem.png"></img>'
    )
    .replace(
      /\[酷币2毛\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_twom.png"></img>'
    )
    .replace(
      /\[酷币5毛\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_fivem.png"></img>'
    )
    .replace(
      /\[酷币1块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_oney.png"></img>'
    )
    .replace(
      /\[酷币2块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_twoy.png"></img>'
    )
    .replace(
      /\[酷币5块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_fivey.png"></img>'
    )
    .replace(
      /\[酷币10块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_teny.png"></img>'
    )
    .replace(
      /\[酷币20块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_ty.png"></img>'
    )
    .replace(
      /\[酷币50块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_fy.png"></img>'
    )
    .replace(
      /\[酷币100块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_oy.png"></img>'
    )
    .replace(
      /\[酷币1$\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_oned.png"></img>'
    )
    .replace(
      /\[酷币2$\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_twod.png"></img>'
    )
    .replace(
      /\[酷币5$\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_fived.png"></img>'
    )
    .replace(
      /\[酷币1€\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_oneo.png"></img>'
    )
    .replace(
      /\[酷币2€\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_twoo.png"></img>'
    )
    .replace(
      /\[酷币5€\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/c_fiveo.png"></img>'
    )
    .replace(
      /\[灰色酷币\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_68.png"></img>'
    )
    .replace(
      /\[绿色酷币\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_69.png"></img>'
    )
    .replace(
      /\[白纹酷币\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_70.png"></img>'
    )
    .replace(
      /\[新酷币\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_71.png"></img>'
    )
    .replace(
      /\[新币1分\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_72.png"></img>'
    )
    .replace(
      /\[新酷币2分\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_85.png"></img>'
    )
    .replace(
      /\[新酷币5分\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_86.png"></img>'
    )
    .replace(
      /\[新酷币1毛\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_87.png"></img>'
    )
    .replace(
      /\[新酷币2毛\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_88.png"></img>'
    )
    .replace(
      /\[新酷币5毛\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_89.png"></img>'
    )
    .replace(
      /\[新酷币1块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_90.png"></img>'
    )
    .replace(
      /\[新酷币2块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_91.png"></img>'
    )
    .replace(
      /\[新酷币5块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_92.png"></img>'
    )
    .replace(
      /\[新酷币10块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_93.png"></img>'
    )
    .replace(
      /\[新酷币20块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_94.png"></img>'
    )
    .replace(
      /\[新酷币50块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_73.png"></img>'
    )
    .replace(
      /\[新酷币100块\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_74.png"></img>'
    )
    .replace(
      /\[新酷币1$\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_75.png"></img>'
    )
    .replace(
      /\[新酷币2$\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_76.png"></img>'
    )
    .replace(
      /\[新酷币5$\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_77.png"></img>'
    )
    .replace(
      /\[新酷币1€\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_78.png"></img>'
    )
    .replace(
      /\[新酷币2€\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_79.png"></img>'
    )
    .replace(
      /\[新酷币5€\]/g,
      '<img style="height: 18px; margin-bottom: ' +
        margin +
        ';" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_80.png"></img>'
    );
}
