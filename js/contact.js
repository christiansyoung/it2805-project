$(function () {
        $('#form-submit').on('click', function(e) {
          e.preventDefault();

          var formErrors = false;

          // Form validations
          if ($('#form-name').val().length == 0) {
            $('#form-name').parent().addClass('has-error');
            $('#flash').html('<div class="alert alert-danger">No name provided.</div>');
            formErrors = true;
          } else {
            $('#form-name').parent().removeClass('has-error');
          }

          if ($('#form-message').val().length == 0) {
            $('#form-message').parent().addClass('has-error');
            $('#flash').html('<div class="alert alert-danger">No message provided.</div>');
            formErrors = true;
          } else {
            $('#form-name').parent().removeClass('has-error');
          }

          var x = $('#form-email').val();
          var atpos = x.indexOf("@");
          var dotpos = x.lastIndexOf(".");
          if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            $('#form-email').parent().addClass('has-error');
            $('#flash').html('<div class="alert alert-danger">Invalid email address. Please try again.</div>');
            formErrors = true;
          } else {
            $('#form-name').parent().removeClass('has-error');
          }

          if(formErrors) {
            return;
          }

          // Send form
          var formjsonObj = $('form').serializeArray();
          var xmlString = '<root>';

          // Build XML string
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
            headers : {
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'X-Requested-With'
            },
            success: function() {
              console.log('Successfully sent data below');
              console.log(xmlString);
              $('#flash').html('<div class="alert alert-success">The form was sent</div>');
              alert(xmlString);
            },
            error : function (xhr, ajaxOptions, thrownError){
              console.log(xhr.status);
              console.log(thrownError);
            }
          });
        })
      });
