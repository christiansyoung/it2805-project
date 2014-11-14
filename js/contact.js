$(function () {
        $('#form-submit').click(function(e) {
          e.preventDefault();

          if ($('#form-name').val().length == 0) {
            $('#form-name').parent().addClass('has-error');
            $('#flash').html('<div class="alert alert-danger">No name provided.</div>');
            return
          }

          if ($('#form-message').val().length == 0) {
            $('#form-message').parent().addClass('has-error');
            $('#flash').html('<div class="alert alert-danger">No message provided.</div>');
            return
          }

          var x = $('#form-email').val();
          var atpos = x.indexOf("@");
          var dotpos = x.lastIndexOf(".");
          if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            $('#form-email').parent().addClass('has-error');
            $('#flash').html('<div class="alert alert-danger">Invalid email address. Please try again.</div>');
            return false;
          }

          var formjsonObj = $('form').serializeArray();

          var xmlString = '<root>';

          $.each(formjsonObj, function () {
              xmlString += '<' + this.name + '>' + this.value + '</' + this.name + '>';
          });

          xmlString += '</root>';

          $.ajax({
            url: '',
            data: xmlString,
            type: 'POST',
            contentType: 'text/xml',
            dataType: 'text',
            success: function() {
              console.log('Successfully sent data below');
              console.log(xmlString);
              $('#flash').html('<div class="alert alert-success">The form was sent</div>');
            },
            error : function (xhr, ajaxOptions, thrownError){
              console.log(xhr.status);
              console.log(thrownError);
            }
          });
        })
      });
