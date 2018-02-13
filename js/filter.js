
            $('.sh-filter-item').on('click', function () {
                var selectedClass = $(this).data("filter");
                console.log(selectedClass);
                $('.sh-filter-item-content').removeClass('active');

                $(this).find('.sh-filter-item-content').addClass('active');

                if (selectedClass == "*") {
                    $(".item").fadeIn().addClass('scale');
                }
                else {
                    $(".item").not(selectedClass).fadeOut().removeClass('scale');
                    setTimeout(function () {
                        $(selectedClass).fadeIn().addClass('scale');
                    }, 300);
                }
            });
      