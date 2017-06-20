# -*- perl -*-

$GET = "-X GET";
$POST = "-X POST";
$PUT = "-X PUT";
$DELETE = "-X DELETE";

$URL  = "http://localhost:8000";

$HEADER_CONTENT_TYPE_JSON = "--header 'Content-Type: application/json'";

######################################################################

sub send
{
  my( $method, $url, $data ) = @_;

  printf STDERR "%s\n", ('*' x 80);
  if( $data eq "" ) {
    printf STDERR "Test: ${method} ${url}\n";
    system( "curl ${method} ${url}" );
  }
  else {
    printf STDERR "Test: ${method} ${url} ${data}\n";
    system( "curl ${HEADER_CONTENT_TYPE_JSON} ${method} ${data} ${url}" );
  }
  print "\n";
  printf STDERR "%s\n", ('*' x 80);
}

######################################################################

$DATA1 = "--data '{\"username\":\"alpha\",\"avatar_url\":\"https://github.com/user/avatar\",\"score\":13}'";
$DATA1a = "--data '{\"username\":\"bravo\"}'";

######################################################################

# &send( ${GET}, "${URL}/" );

# &send( ${GET}, "${URL}/players/" );

# &send( ${POST}, "${URL}/players/", ${DATA1} );
# &send( ${GET}, "${URL}/players/" );

# &send( ${GET}, "${URL}/players/" );
# &send( ${GET}, "${URL}/players/alpha" );

# &send( ${GET}, "${URL}/players/" );
# &send( ${PUT}, "${URL}/players/alpha", ${DATA1a} );
# &send( ${GET}, "${URL}/players/alpha" );
# &send( ${GET}, "${URL}/players/bravo" );

# &send( ${GET}, "${URL}/players/" );
# &send( ${DELETE}, "${URL}/players/bravo" );
# &send( ${GET}, "${URL}/players/" );

&send( ${GET}, "${URL}/players/" );
&send( ${DELETE}, "${URL}/players/alpha" );
&send( ${GET}, "${URL}/players/" );

