$("#id1").bind('input propertychange',function(){
		/*这个是全部数据的数组*/
		var arr = ['氢气','氦气','氖气','氮气','氧气','氟气','氩气', '臭氧', '氯气', '氪气', '氙气', '氡气', '煤气', '铝','镍','镍铬','铬','锰','锡','氨气','甲烷', '乙炔', '一氧化碳', '空气', 
		'一氧化氮', '硫化氢', '二氧化碳', '二氧化氮','氰','二氧化硫','溴化氢','碘化氢','康铜','铜','镁', '锌', '钠', '有机玻璃', '汽油', '乙醚', '石油','酒精','木精','煤油','松节油','苯','二硫化碳',
		'无水甘油','橄榄油','鱼肝油','蓖麻油','金','银','铅','钨', '钽', '白磷', '纯水', '海水', '醋酸', '盐酸', '植物油','矿油','蜂蜜', '硝酸','硫酸','溴','水银','液压油','铸钢','碳钢','铸铁', 
		'石灰石','碳','铂','沥青'];
		/*这个数组我是防止出现重复的数据进行数据去重复后的新数组*/
		var arrNew = [];
		var i;
		for(i=0;i<arr.length;i++){
			var arrItems=arr[i];
		　　  /*判断元素是否存在于arrNew中，如果不存在则插入到arrNew的最后*/
		　　  if($.inArray(arrItems,arrNew)==-1) {
		　　　　    arrNew.push(arrItems);
				/*console.log(arrNew);*/													
			}
		}
		/*这是将input中输入的数据有关联的全部加入新生成的div中显示出来*/
		for(i=0;i<arrNew.length;i++){
			var arrWord = arrNew[i].toString();
			/*console.log(arrWord);*/
			if(((arrWord.indexOf($('#id1').val())) > -1) && ($('#id1').val().length > 0)){
				var addArrWord = "<div class=auto-screening-prompt>" + arrWord + "</div>";
				$("#autoScreening").append(addArrWord);
				$("#autoScreening").removeClass("auto-hidden");
			}
		}
		/*将显示出来的div的内容去重复，input内容变动时去重复*/
		$(".auto-screening-prompt").each(function(){
			if($(this).text().indexOf($('#id1').val()) < 0){
				$(this).remove();
			}
			else if($('#id1').val().length == 0){
				$("#autoScreening").addClass("auto-hidden");
				$(".auto-screening-prompt").remove();
			}
		});	
		/*弹出的提示div去重复*/
		$(".auto-screening-prompt").each(function(i, iText){
			var iTextHtml = iText.innerHTML;
			$(".auto-screening-prompt").each(function(j, jText){
				var jTextHtml = jText.innerHTML;
				if (i < j && iTextHtml == jTextHtml) {
					$(this).remove();
				}
			});
		});    
		/*点击div获取文本传值*/
		$(".auto-screening-prompt").on("click",function(){
			$("#id1").val($(this).text());
			$("#autoScreening").addClass("auto-hidden");
			$(".auto-screening-prompt").remove();
		})				
	})
	
	
	$("#ib1").bind('input propertychange',function(){
		/*这个是全部数据的数组*/
		var arr = ['氢气','二氧化碳','甲苯','苯','空气','氨','氯化氢', '天然气', '氮气', '水', '酒精', '甘油', '乙醚', '煤油','机油','液压油','松香水','萘','甲醇','乙醇','丙醇', '丁醇', '丙酮', '石油', 
		'醋酸', '硫磺', '硫酸', '橄榄油','蓖麻油','导热油','硫','冰','石蜡','蜂蜡','水泥', '混凝土', '软木塞', '沥青', '硬橡胶', 'ABS塑料', '陶瓷','岩盐','无定形碳','炉渣','石墨','玻璃','生铁',
		'黄铜','银','锡','锌','镍','钢','铁','铜', '汞', '铝'];
		/*这个数组我是防止出现重复的数据进行数据去重复后的新数组*/
		var arrNew = [];
		var i;
		for(i=0;i<arr.length;i++){
			var arrItems=arr[i];
		　　  /*判断元素是否存在于arrNew中，如果不存在则插入到arrNew的最后*/
		　　  if($.inArray(arrItems,arrNew)==-1) {
		　　　　    arrNew.push(arrItems);
				/*console.log(arrNew);*/													
			}
		}
		/*这是将input中输入的数据有关联的全部加入新生成的div中显示出来*/
		for(i=0;i<arrNew.length;i++){
			var arrWord = arrNew[i].toString();
			/*console.log(arrWord);*/
			if(((arrWord.indexOf($('#ib1').val())) > -1) && ($('#ib1').val().length > 0)){
				var addArrWord = "<div class=auto-screening-prompt1>" + arrWord + "</div>";
				$("#autoScreening1").append(addArrWord);
				$("#autoScreening1").removeClass("auto-hidden1");
			}
		}
		/*将显示出来的div的内容去重复，input内容变动时去重复*/
		$(".auto-screening-prompt1").each(function(){
			if($(this).text().indexOf($('#ib1').val()) < 0){
				$(this).remove();
			}
			else if($('#ib1').val().length == 0){
				$("#autoScreening1").addClass("auto-hidden1");
				$(".auto-screening-prompt1").remove();
			}
		});	
		/*弹出的提示div去重复*/
		$(".auto-screening-prompt1").each(function(i, iText){
			var iTextHtml = iText.innerHTML;
			$(".auto-screening-prompt1").each(function(j, jText){
				var jTextHtml = jText.innerHTML;
				if (i < j && iTextHtml == jTextHtml) {
					$(this).remove();
				}
			});
		});    
		/*点击div获取文本传值*/
		$(".auto-screening-prompt1").on("click",function(){
			$("#ib1").val($(this).text());
			$("#autoScreening1").addClass("auto-hidden1");
			$(".auto-screening-prompt1").remove();
		})				
	})