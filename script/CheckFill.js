$(function(){
    var CheckFill={
        CountPeople:(function(){
            var $plusPeople=$('.plus').first(),
                $cutPeople=$('.cut').first(),
                $num=$('.sharediv b').first(),
                $tableShare=$('.TouristInfo').find('.share');
            function tableDom(){
                var countNum=parseInt($num.text()),
                    countInfo=
                        '<div class="TouristInfodiv1 clearfix divborderleft">' +
                        '<input class="typewidth1" type="text" placeholder="姓名">' +
                        '<div class="typediv">' +
                        '<span class="id-card"><span>身份证</span><s></s></span>' +
                        '<dd><p>身份证</p><p>驾驶证</p></dd>' +
                        '</div>' +
                        '<input class="typewidth2" type="text">' +
                        '<input class="typewidth2" type="text">' +
                        '<input type="button" class="clearBtn" value="清空">' +
                        '<span class="bold">出游人 '+ countNum +'</span>' +
                        '</div>';
                return countInfo;
                }
            $plusPeople.click(function(){
                $tableShare.append(tableDom);
            });
            $cutPeople.click(function(){
                if($('.TouristInfodiv1').size() != 1){
                    $('.TouristInfodiv1').last().remove();
                }
            });
        })(),
        Select:(function(){
            var $box=$('.InsuranceInfoMain .box'),
                $fontzBlue=$box.find('dd p:last-child'),
                $InsuranceInfoFloat=$('.InsuranceInfoFloat'),
                floatOffsetX=$fontzBlue.position().left;

            $fontzBlue.hover(function(){
                    var nIndex=$fontzBlue.index($(this)),
                        floatX=$(this).width() + floatOffsetX,
                        floatY=$fontzBlue.eq(nIndex).position().top-7;
                    $InsuranceInfoFloat.css('left',-9999).eq(nIndex).css({left:floatX,top:floatY});
                }
                ,function(){
                    $InsuranceInfoFloat.css('left',-9999);
                });
            $box.on('click','dd s',function(){
                if(!$(this).hasClass('current')){
                    $(this).addClass('current');
                    $(this).next().addClass('PayBlue')
                }else{
                    $(this).removeClass('current');
                    $(this).next().removeClass('PayBlue')
                }
            });
        })(),
        clearInputVal:(function(){
            var $btn1=$('.ContactInfo_btn1'),
                $input_text=$('.ContactInfo').find(':text'),
                $TouristInfo=$('.TouristInfo');
            $btn1.click(function(){
                $input_text.val('');
            });
            $TouristInfo.on('click','.clearBtn',function(){
                $(this).parent().find(':text').val('');
            });
        })(),
        comboBox:(function(){
            var $TouristInfo=$('.TouristInfo');
            $TouristInfo.on('click','.id-card span',function(e){
                e.stopPropagation();
                var nIndex=$('.id-card').find('span').index($(this));
                $('.typediv').find('dd').hide().eq(nIndex).show();
            });

            $TouristInfo.on('click','.id-card s',function(e){
                e.stopPropagation();
                var nIndex=$('.id-card').find('s').index($(this));
                $('.typediv').find('dd').hide().eq(nIndex).show();
            });

            $TouristInfo.on('click','.typediv dd p',function(e){
                e.stopPropagation();
                $(this).parent().hide().prev().find('span').text($(this).text());
            });

            $(document).click(function(){
                $('.typediv').find('dd').hide();
            });
        })()
    };
});